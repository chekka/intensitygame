<?php

namespace DevOwl\RealCookieBanner;

use RecursiveArrayIterator;
use RecursiveIteratorIterator;
use WP_Rewrite;
use WP_Post;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Utility helpers.
 */
class Utils {
    /**
     * nip.io
     */
    const HOST_TYPE_MAIN = 'main';
    /**
     * .nip.io
     */
    const HOST_TYPE_MAIN_WITH_ALL_SUBDOMAINS = 'main+subdomains';
    /**
     * feat.nip.io
     */
    const HOST_TYPE_CURRENT = 'current';
    /**
     * https://feat.nip.io
     */
    const HOST_TYPE_CURRENT_PROTOCOL = 'current+protocol';
    /**
     * .feat.nip.io
     */
    const HOST_TYPE_CURRENT_WITH_ALL_SUBDOMAINS = 'current+subdomains';
    const PREINSTALLED_ENV_IONOS = 'ionos';
    /**
     * Join an array of strings together with comma and the last one with `and`.
     *
     * @param string[] $array
     * @param string $andSeparator
     */
    public static function joinWithAndSeparator($array, $andSeparator) {
        if (\count($array) > 1) {
            \array_splice($array, \count($array) - 1, 0, ['{{andSeparator}}']);
        }
        return \str_replace(', {{andSeparator}}, ', $andSeparator, \join(', ', $array));
    }
    /**
     * Always create a clone of the post cause we need to force the `post_status` to get the valid permalink.
     * This also returns a valid permalink even for trashed or draft posts.
     *
     * @param WP_Post|number $post
     * @see https://wordpress.stackexchange.com/a/42988/83335
     * @return string|false
     */
    public static function getPermalink($post) {
        if (\is_numeric($post)) {
            $post = get_post($post);
        }
        if (!$post instanceof \WP_Post) {
            return \false;
        }
        if ($post->post_status === 'publish') {
            return get_permalink($post);
        }
        $clone = clone $post;
        if ($clone->post_status === 'trash') {
            $clone->post_name = \preg_replace('/__trashed$/', '', $clone->post_name);
        }
        $clone->post_status = 'publish';
        $clone->post_name = sanitize_title($clone->post_name ? $clone->post_name : $clone->post_title, $clone->ID);
        return get_permalink($clone);
    }
    /**
     * Get the currently used admin color scheme.
     *
     * @return string[]
     */
    public static function get_admin_colors() {
        global $_wp_admin_css_colors;
        $defaults = ['#1d2327', '#2c3338', '#2271b1', '#72aee6'];
        // In some cases this could be null, do not ask why and which plugin/theme does override this?
        $cfg = $_wp_admin_css_colors[get_user_option('admin_color')] ?? null;
        return $cfg === null ? $defaults : $cfg->colors ?? ['#1d2327', '#2c3338', '#2271b1', '#72aee6'];
    }
    /**
     * Flatten an array.
     *
     * @param array $array
     * @param boolean $recursive
     */
    public static function array_flatten($array, $recursive = \false) {
        $return = [];
        foreach ($array as $key => $value) {
            if (\is_array($value)) {
                $return = \array_merge($return, $recursive ? self::array_flatten($array, $recursive) : $value);
            } else {
                $return[$key] = $value;
            }
        }
        return $return;
    }
    /**
     * Remove all query arguments not designed in our permalink structure.
     *
     * @param string $url
     */
    public static function removeNonPermalinkQueryFromUrl($url) {
        if (empty($url)) {
            return '';
        }
        // No query argument, short circuit
        if (\strpos($url, '?') === \false) {
            return $url;
        }
        // Get arguments in requested URL (ported from `add_query_arg`)
        list(, $query) = \explode('?', $url, 2);
        wp_parse_str($query, $queryParameters);
        // Get arguments in current permalink settings
        $permalink_structure = get_option('permalink_structure');
        $keepQueryParameters = [];
        if (empty($permalink_structure)) {
            $keepQueryParameters[] = 'p';
        } elseif (\strpos($permalink_structure, '?') !== \false) {
            \parse_str(\explode('?', $permalink_structure, 2)[1], $parsedStr);
            $keepQueryParameters = \array_keys($parsedStr);
        }
        $removeQueryParameters = [];
        foreach (\array_keys($queryParameters) as $queryParameter) {
            if (!\in_array($queryParameter, $keepQueryParameters, \true)) {
                $removeQueryParameters[] = $queryParameter;
            }
        }
        return remove_query_arg($removeQueryParameters, $url);
    }
    /**
     * Pass in an associative array, such as array('A'=>5, 'B'=>45, 'C'=>50).
     * It is recommend to sort the weights ascending to speed up performance.
     *
     * @param array $weightedValues
     * @see https://stackoverflow.com/questions/445235/generating-random-results-by-weight-in-php
     */
    public static function getRandomWeightedElement($weightedValues) {
        $rand = \mt_rand(1, (int) \array_sum($weightedValues));
        foreach ($weightedValues as $key => $value) {
            $rand -= $value;
            if ($rand <= 0) {
                return $key;
            }
        }
    }
    /**
     * Get the IP address of the current request.
     */
    public static function getIpAddress() {
        if (isset($_SERVER['HTTP_X_REAL_IP'])) {
            return sanitize_text_field(wp_unslash($_SERVER['HTTP_X_REAL_IP']));
        } elseif (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            // `HTTP_X_FORWARDED_FOR` can contain multiple IPs
            return (string) rest_is_ip_address(
                \trim(\current(\preg_split('/,/', sanitize_text_field(wp_unslash($_SERVER['HTTP_X_FORWARDED_FOR'])))))
            );
        } elseif (isset($_SERVER['REMOTE_ADDR'])) {
            return sanitize_text_field(wp_unslash($_SERVER['REMOTE_ADDR']));
        }
        return null;
    }
    /**
     * Flatten an array.
     *
     * @param array $array
     * @see https://stackoverflow.com/a/1320259/5506547
     */
    public static function flatten($array) {
        $it = new \RecursiveIteratorIterator(new \RecursiveArrayIterator($array));
        $result = [];
        foreach ($it as $v) {
            $result[] = $v;
        }
        return $result;
    }
    /**
     * Check if the current installation is a preinstalled environment.
     *
     * @return string|false
     */
    public static function isPreinstalledEnvironment() {
        // IONOS
        $mu_plugins = get_mu_plugins();
        if (isset($mu_plugins['ionos-assistant.php'])) {
            return self::PREINSTALLED_ENV_IONOS;
        }
        return \false;
    }
    /**
     * Get the list of active plugins in a map: File => Name. This is needed for the config and the
     * notice for `skip-if-active` attribute in cookie opt-in codes.
     *
     * @param boolean $includeSlugs
     */
    public static function getActivePluginsMap($includeSlugs = \true) {
        $result = [];
        $plugins = get_option('active_plugins');
        foreach ($plugins as $pluginFile) {
            $name = wp_specialchars_decode(get_plugin_data(\constant('WP_PLUGIN_DIR') . '/' . $pluginFile)['Name']);
            $result[$pluginFile] = $name;
            if ($includeSlugs) {
                $slug = \explode('/', $pluginFile)[0];
                $result[$slug] = $name;
            }
        }
        return $result;
    }
    /**
     * Check if a single theme is active. It supports parent theme.
     *
     * @param string $slug
     */
    public static function isThemeActive($slug) {
        $theme = wp_get_theme();
        $slugs = [\basename($theme->get_template_directory()), \basename($theme->get_stylesheet_directory())];
        $parent = $theme->parent();
        if ($parent !== \false) {
            $slugs[] = \basename($parent->get_template_directory());
            $slugs[] = \basename($parent->get_stylesheet_directory());
        }
        $slugs = \array_unique($slugs);
        return \in_array($slug, $slugs, \true);
    }
    /**
     * Checks if any of the given plugins is active. It supports also slugs.
     *
     * @param string|string[] $plugins
     */
    public static function anyPluginActive($plugins) {
        $plugins = \is_array($plugins) ? $plugins : \explode(',', $plugins);
        return \in_array(\true, \array_map([self::class, 'isPluginActive'], $plugins), \true);
    }
    /**
     * Check if a single plugin is active. It supports also slugs.
     *
     * @param string $plugin
     */
    public static function isPluginActive($plugin) {
        if (is_plugin_active($plugin)) {
            return \true;
        }
        $activePluginSlugs = [];
        foreach (get_option('active_plugins') as $activePlugin) {
            $activePluginSlugs[] = \explode('/', $activePlugin)[0];
        }
        // Break early if we have already found the plugin
        if (\in_array($plugin, $activePluginSlugs, \true)) {
            return \true;
        }
        // Check multisite-wide by slug
        if (is_multisite()) {
            foreach (\array_keys(get_site_option('active_sitewide_plugins')) as $activePlugin) {
                $activePluginSlugs[] = \explode('/', $activePlugin)[0];
            }
            return \in_array($plugin, $activePluginSlugs, \true);
        }
        return \false;
    }
    /**
     * Support samesite cookie flag in both php 7.2 (current production) and php >= 7.3 (when we get there)
     * From: https://github.com/GoogleChromeLabs/samesite-examples/blob/master/php.md and https://stackoverflow.com/a/46971326/2308553
     *
     * @see https://stackoverflow.com/a/59654832/5506547
     * @see https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Set-Cookie/SameSite
     * @param string $name
     * @param string $value
     * @param int $expire
     * @param string $path
     * @param string $domain
     * @param boolean $secure
     * @param boolean $httponly
     * @param string $samesite
     */
    public static function setCookie(
        $name,
        $value = '',
        $expire = 0,
        $path = '',
        $domain = '',
        $secure = \false,
        $httponly = \false,
        $samesite = ''
    ) {
        if (\headers_sent()) {
            return \false;
        }
        // Fix `$path`: It never should be empty
        if (empty($path)) {
            $path = '/';
        }
        /**
         * Strictly disable setting a cookie.
         *
         * @hook RCB/SetCookie/Allow
         * @param {boolean} $set
         * @param {string} $cookieName
         * @param {string} $cookieValue
         * @param {number} $expire
         * @param {string} $path
         * @param {string} $domain
         * @param {boolean} $secure
         * @param {boolean} $httponly
         * @param {string} $samesite
         * @return boolean
         * @since 2.0.0
         */
        $allowed = apply_filters(
            'RCB/SetCookie/Allow',
            \true,
            $name,
            $value,
            $expire,
            $path,
            $domain,
            $secure,
            $httponly,
            $samesite
        );
        if (!$allowed) {
            return \false;
        }
        /**
         * Strictly disable setting a cookie for a given name.
         *
         * @hook RCB/SetCookie/Allow/$cookieName
         * @param {boolean} $set
         * @param {string} $cookieName
         * @param {string} $cookieValue
         * @param {number} $expire
         * @param {string} $path
         * @param {string} $domain
         * @param {boolean} $secure
         * @param {boolean} $httponly
         * @param {string} $samesite
         * @return boolean
         * @since 2.0.0
         */
        $allowed = apply_filters(
            'RCB/SetCookie/Allow/' . $name,
            \true,
            $name,
            $value,
            $expire,
            $path,
            $domain,
            $secure,
            $httponly,
            $samesite
        );
        if (!$allowed) {
            return \false;
        }
        // Avoid warning : A cookie associated with a resource at URL was set with `SameSite=None` but without `Secure`.
        // It has been blocked, as Chrome now only delivers cookies marked `SameSite=None` if they are also marked `Secure`.
        // You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5633521622188032.
        // See also https://developer.mozilla.org/de/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        $defaultSameSite = 'Strict';
        // supported in all browsers without any security warnings
        $useSameSite = empty($samesite) ? $defaultSameSite : $samesite;
        $useSameSite = \strtolower($useSameSite) === 'none' && !$secure ? $defaultSameSite : $useSameSite;
        /**
         * Modify the cookie `setcookie` parameters.
         *
         * @hook RCB/SetCookie
         * @param {array} $cookie An array holding the cookie name, value, expire, path, domain, ....
         * @return {array}
         * @since 2.11.2
         */
        $filteredParameters = apply_filters('RCB/SetCookie', [
            'name' => $name,
            'value' => $value,
            'expire' => $expire,
            'path' => $path,
            'domain' => $domain,
            'secure' => $secure,
            'httponly' => $httponly,
            'samesite' => $useSameSite
        ]);
        // Do not use extract() for security purposes!
        $name = $filteredParameters['name'];
        $value = $filteredParameters['value'];
        $expire = $filteredParameters['expire'];
        $path = $filteredParameters['path'];
        $domain = $filteredParameters['domain'];
        $secure = $filteredParameters['secure'];
        $httponly = $filteredParameters['httponly'];
        $useSameSite = $filteredParameters['samesite'];
        $result = \false;
        if (\PHP_VERSION_ID < 70300) {
            $result = \setcookie(
                $name,
                $value,
                $expire,
                "{$path}; samesite={$useSameSite}",
                $domain,
                $secure,
                $httponly
            );
        } else {
            $result = \setcookie($name, $value, [
                'expires' => $expire,
                'path' => $path,
                'domain' => $domain,
                'samesite' => $useSameSite,
                'secure' => $secure,
                'httponly' => $httponly
            ]);
        }
        // Set cookie immediately for this session https://stackoverflow.com/a/3230167/5506547
        if ($result) {
            $_COOKIE[$name] = $value;
        }
        return $result;
    }
    /**
     * Hash a passed string. It uses PHP `hash` and md5 as fallback as `hash` is not
     * available in all environments.
     *
     * @param string $data
     */
    public static function hash($data) {
        /**
         * In some cases, hosting providers generate the salts with lower case constant names.
         * I do not know if this works correctly, as PHP's method to obtain a constant is case-
         * sensitive and e.g. `wp_salt()` also expects an uppercase constant name.
         *
         * If a lowercase constant exists, use it, instead try the uppercase one and throw an error
         * if needed (PHP > 8).
         */
        $nonceSalt = \defined('nonce_salt') ? \constant('nonce_salt') : \constant('NONCE_SALT');
        $data = $nonceSalt . $data;
        if (\function_exists('hash')) {
            return \hash('sha256', $data);
        } else {
            return \str_repeat('0', 32) . \md5($data);
        }
    }
    /**
     * Get a host URL for technical cookie definitions.
     *
     * @param string $type See class constants
     * @see https://stackoverflow.com/a/6768831/5506547
     */
    public static function host($type) {
        $actual_link = home_url('', is_ssl() ? 'https' : 'http');
        $parsed = \parse_url($actual_link);
        $scheme = $parsed['scheme'];
        $host = $parsed['host'];
        switch ($type) {
            case self::HOST_TYPE_MAIN:
                return self::giveHost($host);
            case self::HOST_TYPE_MAIN_WITH_ALL_SUBDOMAINS:
                return '.' . self::giveHost($host);
            case self::HOST_TYPE_CURRENT:
                return $host;
            case self::HOST_TYPE_CURRENT_PROTOCOL:
                return $scheme . '://' . $host;
            case self::HOST_TYPE_CURRENT_WITH_ALL_SUBDOMAINS:
                return '.' . $host;
            default:
                return '';
        }
    }
    /**
     * Remove all subdomains from host string.
     *
     * @param string $host_with_subdomain
     * @see https://stackoverflow.com/a/21809669/5506547
     */
    public static function giveHost($host_with_subdomain) {
        $array = \explode('.', $host_with_subdomain);
        $domain = \array_key_exists(\count($array) - 2, $array) ? $array[\count($array) - 2] : '';
        return (empty($domain) ? '' : $domain . '.') . $array[\count($array) - 1];
    }
    /**
     * Check if a string starts with a given needle.
     *
     * @param string $haystack The string to search in
     * @param string $needle The starting string
     * @see https://stackoverflow.com/a/834355/5506547
     */
    public static function startsWith($haystack, $needle) {
        $length = \strlen($needle);
        return \substr($haystack, 0, $length) === $needle;
    }
    /**
     * Check if a string starts with a given needle.
     *
     * @param string $haystack The string to search in
     * @param string $needle The starting string
     * @see https://stackoverflow.com/a/834355/5506547
     */
    public static function endsWith($haystack, $needle) {
        $length = \strlen($needle);
        if (!$length) {
            return \true;
        }
        return \substr($haystack, -$length) === $needle;
    }
    /**
     * Check if current page is frontend page of WordPress.
     */
    public static function isFrontend() {
        $isFrontend = !is_admin() && !wp_doing_cron() && !wp_doing_ajax() && !self::isCLI();
        if ($isFrontend && self::isPageBuilder()) {
            return \false;
        }
        // Check if REST API is coming from frontend
        if (self::isRest()) {
            $referer = wp_get_raw_referer();
            // If we could not detect a referer, it should not be handled as frontend
            if ($referer === \false) {
                return \false;
            }
            // If referer is set, we can definitely check this by `/wp-admin` url part
            $adminUrl = admin_url();
            if (self::startsWith($referer, $adminUrl)) {
                return \false;
            }
        }
        return $isFrontend;
    }
    /**
     * Check if the current page request is a download.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
     */
    public static function isDownload() {
        foreach (\headers_list() as $line) {
            $header = \strtolower($line);
            if (
                self::startsWith($header, 'content-disposition: attachment') ||
                (self::startsWith($header, 'content-type: multipart/form-data') &&
                    \strpos($header, 'boundary') !== \false)
            ) {
                return \true;
            }
        }
        return \false;
    }
    /**
     * Check if the current request is the editor of a page builder.
     */
    public static function isPageBuilder() {
        return isset($_GET['fl_builder']) ||
            isset($_GET['nf_preview_form']) ||
            isset($_GET['legacy-widget-preview']) ||
            (isset($_GET['td_action']) && $_GET['td_action'] === 'tdc_edit') ||
            isset($_GET['et_fb']) ||
            isset($_GET['tb-preview']) ||
            isset($_GET['fb-edit']) ||
            isset($_GET['builder_id']) ||
            isset($_GET['elementor-preview']) ||
            isset($_GET['op3editor']) ||
            isset($_GET['us-builder']) ||
            isset($_GET['tve']) ||
            isset($_GET['ct_builder']) ||
            (isset($_GET['action']) && self::startsWith($_GET['action'], 'oxy_')) ||
            isset($_POST['cs_preview_time']);
    }
    /**
     * Check if current request is coming from WP CLI.
     *
     * @see https://wordpress.stackexchange.com/a/226163/83335
     */
    public static function isCLI() {
        return \defined('WP_CLI') && \constant('WP_CLI');
    }
    /**
     * Checks if the current request is a WP REST API request.
     *
     * Case #1: After WP_REST_Request initialisation
     * Case #2: Support "plain" permalink settings
     * Case #3: It can happen that WP_Rewrite is not yet initialized,
     *          so do this (wp-settings.php)
     * Case #4: URL Path begins with wp-json/ (your REST prefix)
     *          Also supports WP installations in subfolders
     *
     * @returns boolean
     * @author matzeeable
     * @see https://gist.github.com/matzeeable/dfd82239f48c2fedef25141e48c8dc30
     */
    public static function isRest() {
        if (
            (\defined('REST_REQUEST') && \constant('REST_REQUEST')) ||
            (isset($_GET['rest_route']) && \strpos(\trim($_GET['rest_route'], '\\/'), rest_get_url_prefix(), 0) === 0)
        ) {
            return \true;
        }
        // (#3)
        global $wp_rewrite;
        if ($wp_rewrite === null) {
            $wp_rewrite = new \WP_Rewrite();
        }
        // (#4)
        $rest_url = wp_parse_url(trailingslashit(rest_url()));
        $current_url = wp_parse_url(add_query_arg([]));
        // no `esc_url` needed as only used for checking purposes
        return \strpos($current_url['path'] ?? '/', $rest_url['path'], 0) === 0;
    }
    /**
     * Check if current content type is the given mime type.
     *
     * @param string $mime
     * @see https://stackoverflow.com/a/22479030/5506547
     */
    public static function currentContentTypeIs($mime) {
        $headers = \headers_list();
        // get list of headers
        foreach ($headers as $header) {
            // iterate over that list of headers
            if (\stripos($header, 'Content-Type') !== \false) {
                // if the current header hasthe String "Content-Type" in it
                $headerParts = \explode(':', $header);
                // split the string, getting an array
                $headerValue = \trim($headerParts[1]);
                // take second part as value
                if (\stripos($headerValue, $mime) !== \false) {
                    return \true;
                }
            }
        }
        return \false;
    }
    /**
     * Allow `find_in_set` in `meta_query` compare functionality.
     *
     * @param array $where
     * @param object $query
     * @see https://gist.github.com/mikeschinkel/6402058
     */
    public static function posts_where_find_in_set($where, $query) {
        global $wpdb;
        foreach ($query->meta_query->queries as $index => $meta_query) {
            if (isset($meta_query['compare']) && 'find_in_set' === \strtolower($meta_query['compare'])) {
                $postMetaTable = $wpdb->postmeta;
                $metaKey = $meta_query['key'];
                $metaValue = $meta_query['value'];
                $regex =
                    "#\\([\n\r\\s]+({$postMetaTable}.meta_key = \\'" .
                    \preg_quote($metaKey) .
                    "\\') AND ({$postMetaTable}.meta_value) = (\\'" .
                    \preg_quote($metaValue) .
                    "\\')[\n\r\\s]+\\)#m";
                $where = \preg_replace($regex, '($1 AND FIND_IN_SET($3, $2))', $where);
            }
        }
        return $where;
    }
    /**
     * This is needed to get the home_url without any additional pathes (e.g. WPML).
     */
    public static function getOriginalHomeUrl() {
        // Check if constant is defined (https://wordpress.org/support/article/changing-the-site-url/#edit-wp-config-php)
        if (\defined('WP_HOME')) {
            $home_url = \constant('WP_HOME');
        } else {
            // Force so the options cache is filled
            get_option('home');
            // Directly read from our cache cause we want to skip `home` / `option_home` filters (https://git.io/JOnGV)
            // Why `alloptions`? Due to the fact that `home` is `autoloaded=yes`, it is loaded via `wp_load_alloptions` and filled
            // to the cache key `alloptions`. The filters are used by WPML and PolyLang but we do not care about them
            $alloptions = wp_cache_get('alloptions', 'options');
            $home_url = \is_array($alloptions) ? $alloptions['home'] : home_url();
        }
        $home_url = trailingslashit($home_url);
        $home_url = set_url_scheme($home_url, is_ssl() ? 'https' : 'http');
        return $home_url;
    }
    /**
     * Get the current requested URL.
     */
    public static function getRequestUrl() {
        $requested_url = is_ssl() ? 'https://' : 'http://';
        $requested_url .= $_SERVER['HTTP_HOST'];
        $requested_url .= $_SERVER['REQUEST_URI'];
        return esc_url_raw($requested_url);
    }
}