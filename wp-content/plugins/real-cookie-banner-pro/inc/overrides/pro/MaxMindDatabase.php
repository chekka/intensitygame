<?php

namespace DevOwl\RealCookieBanner\lite;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Vendor\MaxMind\Db\Reader;
use Exception;
use PharData;
use WP_Error;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * A common service to download the MaxMind database to the WordPress `uploads` directory.
 */
class MaxMindDatabase {
    use UtilsProvider;
    // At the moment, we only need the Country database
    const DATABASE_NAME = 'GeoLite2-Country';
    const DATABASE_EXTENSION = '.mmdb';
    /**
     * Singleton instance.
     *
     * @var MaxMindDatabase
     */
    private static $me = null;
    /**
     * C'tor.
     */
    private function __construct() {
        // Silence is golden.
    }
    /**
     * Lookup country code by IP address. Can return `null` if not found.
     *
     * @param string $ip
     */
    public function lookupCountryCode($ip) {
        if (!$this->exists()) {
            return null;
        }
        $reader = new \DevOwl\RealCookieBanner\Vendor\MaxMind\Db\Reader($this->getPath());
        $result = $reader->get($ip);
        if ($result === null) {
            return null;
        }
        return $result['country']['iso_code'];
    }
    /**
     * Get the absolute path where the database is located.
     */
    public function getPath() {
        $uploads_dir = wp_upload_dir();
        $database_path = path_join(
            path_join($uploads_dir['basedir'], RCB_SLUG_LITE . '_uploads'),
            self::DATABASE_NAME . self::DATABASE_EXTENSION
        );
        wp_mkdir_p(\dirname($database_path));
        return $database_path;
    }
    /**
     * Delete the database.
     */
    public function clear() {
        return @\unlink($this->getPath());
    }
    /**
     * Check if the database exists.
     */
    public function exists() {
        return \file_exists($this->getPath());
    }
    /**
     * Download the database `gzip`ped and extract it.
     *
     * @param array $args Additional query arguments
     * @return WP_Error|true
     */
    public function download($args = []) {
        require_once ABSPATH . 'wp-admin/includes/file.php';
        $isDevEnv = \defined('DEVOWL_WP_DEV') && \constant('DEVOWL_WP_DEV');
        $apiUrl = $isDevEnv ? 'http://real_cookie_banner_backend:8000/' : 'https://rcb.devowl.io/';
        $apiUrl = add_query_arg($args, $apiUrl . '1.0.0/country-bypass/db/max-mind-geo-lite-2-country.tar.gz');
        // Allow Docker host downloads in local development environment
        if ($isDevEnv) {
            add_filter('http_request_args', [$this, 'http_request_args']);
        }
        $tmp_archive_path = download_url($apiUrl);
        if ($isDevEnv) {
            remove_filter('http_request_args', [$this, 'http_request_args']);
        }
        if (is_wp_error($tmp_archive_path)) {
            return $tmp_archive_path;
        }
        // Unarchive the database
        try {
            $phar = new \PharData($tmp_archive_path);
            $fileInArchive =
                trailingslashit($phar->current()->getFilename()) . self::DATABASE_NAME . self::DATABASE_EXTENSION;
            $content = $phar[$fileInArchive]->getContent();
            \file_put_contents($this->getPath(), $content);
        } catch (\Exception $e) {
            return new \WP_Error('rcb_maxmind_geoip_database_unarchive', $exception->getMessage());
        } finally {
            \unlink($tmp_archive_path);
            // Archive no longer needed
        }
        return \true;
    }
    /**
     * Disable `reject_unsafe_urls` for our download URL to make it work with Docker environments.
     *
     * @param array $args
     */
    public function http_request_args($args) {
        $args['reject_unsafe_urls'] = \false;
        return $args;
    }
    /**
     * Get singleton instance.
     *
     * @codeCoverageIgnore
     */
    public static function getInstance() {
        return self::$me === null ? (self::$me = new \DevOwl\RealCookieBanner\lite\MaxMindDatabase()) : self::$me;
    }
}
