<?php

namespace DevOwl\RealCookieBanner\scanner;

use DevOwl\RealCookieBanner\base\UtilsProvider;
use DevOwl\RealCookieBanner\Core;
use DevOwl\RealCookieBanner\Utils;
use WP_Post;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Automatically detect changes to pages and posts, or CPT's and scan them again.
 */
class OnChangeDetection {
    use UtilsProvider;
    private $scanner;
    /**
     * C'tor.
     *
     * @param Scanner $scanner
     * @codeCoverageIgnore
     */
    public function __construct($scanner) {
        $this->scanner = $scanner;
    }
    /**
     * A post got updated or created, add it to our queue.
     *
     * @param int $post_id
     * @param WP_Post $post
     */
    public function save_post($post_id, $post) {
        $this->fromPost($post);
    }
    /**
     * The `post_updated` hook is fired before `save_post` so we can identify if the slug has been changed (parent or slug).
     *
     * @param int $post_id
     * @param WP_Post $post_after
     * @param WP_Post $post_before
     */
    public function post_updated($post_id, $post_after, $post_before) {
        $permalinkAfter = \DevOwl\RealCookieBanner\Utils::getPermalink($post_after);
        $permalinkBefore = \DevOwl\RealCookieBanner\Utils::getPermalink($post_before);
        if ($permalinkAfter !== $permalinkBefore) {
            $this->scanner->getQuery()->removeSourceUrls([$permalinkBefore]);
        }
    }
    /**
     * A post got deleted. Remove the URL from the scan results.
     *
     * @param int $post_id
     */
    public function delete_post($post_id) {
        $post = get_post($post_id);
        if ($post) {
            $link = \DevOwl\RealCookieBanner\Utils::getPermalink($post);
            if (!empty($link)) {
                $this->scanner->getQuery()->removeSourceUrls([$link]);
            }
        }
    }
    /**
     * A post got moved to the trash. Remove the URL from the scan results.
     *
     * @param int $post_id
     */
    public function wp_trash_post($post_id) {
        $link = \DevOwl\RealCookieBanner\Utils::getPermalink(get_post($post_id));
        if (!empty($link)) {
            $this->scanner->getQuery()->removeSourceUrls([$link]);
        }
    }
    /**
     * Check if the post can be queried publicly and add it to our queue.
     *
     * @param WP_Post $post
     */
    protected function fromPost($post) {
        if (is_post_type_viewable($post->post_type)) {
            $link = \DevOwl\RealCookieBanner\Utils::getPermalink($post);
            if (!empty($link)) {
                if ($post->post_status === 'publish') {
                    $this->addUrlToScanner($link);
                } else {
                    // Handle e.g. "Draft" like a deletion
                    $this->scanner->getQuery()->removeSourceUrls([$link]);
                }
            }
        }
    }
    /**
     * Add a changed permalink URL to the scanner queue. It also respects multilingual
     * websites and adds all language translations to the scanner queue (e.g. `/de/my-post`
     * and `/en/my-post`).
     *
     * @param string $url
     */
    protected function addUrlToScanner($url) {
        $urls = [$url];
        $compLanguage = \DevOwl\RealCookieBanner\Core::getInstance()->getCompLanguage();
        if ($compLanguage !== null) {
            foreach ($compLanguage->getActiveLanguages() as $locale) {
                $translatedUrl = $compLanguage->getPermalink($url, $locale);
                if (!empty($translatedUrl)) {
                    $urls[] = $translatedUrl;
                }
            }
        }
        $this->scanner->addUrlsToQueue(\array_unique($urls));
    }
    /**
     * Getter.
     *
     * @codeCoverageIgnore
     */
    public function getQuery() {
        return $this->query;
    }
}
