<?php

namespace DevOwl\RealCookieBanner\lite;

use DevOwl\RealCookieBanner\Stats as RealCookieBannerStats;
use DevOwl\RealCookieBanner\UserConsent;
use DevOwl\RealCookieBanner\view\Blocker;
use DevOwl\RealCookieBanner\view\customize\banner\individual\Texts as IndividualTexts;
use DevOwl\RealCookieBanner\view\customize\banner\Texts;
use DevOwl\RealCookieBanner\view\shortcode\LinkShortcode;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
trait Stats {
    // Documented in IOverrideStats
    public function fetchMainStats($from, $to, $context) {
        global $wpdb;
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\Stats::TABLE_NAME);
        $rows = $wpdb->get_results(
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->prepare(
                "SELECT IFNULL(t.name, CONCAT(s.term_name, %s)) AS term_name, s.accepted, SUM(s.count) AS `count`\n                FROM {$table_name} AS s\n                LEFT JOIN {$wpdb->terms} AS t\n                ON s.term_id = t.term_id\n                WHERE s.day BETWEEN %s AND %s\n                AND s.context = %s\n                GROUP BY 1, 2\n                ORDER BY s.term_id ASC, s.accepted ASC",
                ' (' . __('deleted', RCB_TD) . ')',
                $from,
                $to,
                $context
            ),
            ARRAY_A
        );
        // Transform object types
        foreach ($rows as $key => $row) {
            $rows[$key]['count'] = \intval($row['count']);
        }
        return $rows;
    }
    // Documented in IOverrideStats
    public function fetchButtonsClickedStats($from, $to, $context) {
        global $wpdb;
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $result = [];
        $defaultButtonTexts = \DevOwl\RealCookieBanner\view\customize\banner\Texts::getDefaultButtonTexts();
        $defaultIndividualButtonTexts = \DevOwl\RealCookieBanner\view\customize\banner\individual\Texts::getDefaultButtonTexts();
        $individualPrivacyButtonText = get_option(
            \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_INDIVIDUAL,
            $defaultButtonTexts['acceptIndividual']
        );
        foreach (\DevOwl\RealCookieBanner\UserConsent::CLICKABLE_BUTTONS as $btn) {
            $label = __('None', RCB_TD);
            switch ($btn) {
                case 'main_all':
                    $label = get_option(
                        \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_ALL,
                        $defaultButtonTexts['acceptAll']
                    );
                    break;
                case 'main_essential':
                    $label = get_option(
                        \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_ESSENTIALS,
                        $defaultButtonTexts['acceptEssentials']
                    );
                    break;
                case 'main_close_icon':
                    $label =
                        get_option(
                            \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_ESSENTIALS,
                            $defaultButtonTexts['acceptEssentials']
                        ) .
                        ' (' .
                        __('Close icon', RCB_TD) .
                        ')';
                    break;
                case 'main_custom':
                    $label = get_option(
                        \DevOwl\RealCookieBanner\view\customize\banner\individual\Texts::SETTING_SAVE,
                        $defaultIndividualButtonTexts['save']
                    );
                    break;
                case 'ind_all':
                    $label =
                        $individualPrivacyButtonText .
                        ': ' .
                        get_option(
                            \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_ALL,
                            $defaultButtonTexts['acceptAll']
                        );
                    break;
                case 'ind_essential':
                    $label =
                        $individualPrivacyButtonText .
                        ': ' .
                        get_option(
                            \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_ESSENTIALS,
                            $defaultButtonTexts['acceptEssentials']
                        );
                    break;
                case 'ind_close_icon':
                    $label =
                        $individualPrivacyButtonText .
                        ': ' .
                        get_option(
                            \DevOwl\RealCookieBanner\view\customize\banner\Texts::SETTING_ACCEPT_ESSENTIALS,
                            $defaultButtonTexts['acceptEssentials']
                        ) .
                        ' (' .
                        __('Close icon', RCB_TD) .
                        ')';
                    break;
                case 'ind_custom':
                    $label =
                        $individualPrivacyButtonText .
                        ': ' .
                        get_option(
                            \DevOwl\RealCookieBanner\view\customize\banner\individual\Texts::SETTING_SAVE,
                            $defaultIndividualButtonTexts['save']
                        );
                    break;
                case \DevOwl\RealCookieBanner\view\shortcode\LinkShortcode::BUTTON_CLICKED_IDENTIFIER:
                    $label = __('Shortcode revoke', RCB_TD);
                    break;
                case \DevOwl\RealCookieBanner\view\Blocker::BUTTON_CLICKED_IDENTIFIER:
                    $label = __('Button in Content Blocker', RCB_TD);
                    break;
                default:
                    break;
            }
            $result[$btn] = [$label, 0];
        }
        $rows = $wpdb->get_results(
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->prepare(
                "SELECT button_clicked, COUNT(*) AS cnt\n                    FROM {$table_name} c\n                    INNER JOIN (\n                        SELECT MAX(id) AS latestConsent\n                        FROM {$table_name}\n                        WHERE DATE(created) BETWEEN %s AND %s\n                        AND context = %s\n                        AND forwarded IS NULL\n                        AND button_clicked <> 'none'\n                        GROUP BY uuid) s\n                    ON c.id = s.latestConsent\n                    GROUP BY button_clicked",
                $from,
                $to,
                $context
            ),
            ARRAY_A
        );
        foreach ($rows as $row) {
            $result[$row['button_clicked']][1] = \intval($row['cnt']);
        }
        return $result;
    }
    // Documented in IOverrideStats
    public function fetchCustomBypassStats($from, $to, $context) {
        global $wpdb;
        $result = [];
        $table_name = $this->getTableName(\DevOwl\RealCookieBanner\UserConsent::TABLE_NAME);
        $rows = $wpdb->get_results(
            // phpcs:disable WordPress.DB.PreparedSQL
            $wpdb->prepare(
                "SELECT IFNULL(custom_bypass, CASE WHEN dnt = 1 THEN 'dnt' ELSE 'none' END) AS custom_bypass, COUNT(*) AS cnt\n                    FROM {$table_name} c\n                    INNER JOIN (\n                        SELECT MAX(id) AS latestConsent\n                        FROM {$table_name}\n                        WHERE DATE(created) BETWEEN %s AND %s\n                        AND context = %s\n                        AND forwarded IS NULL\n                        GROUP BY uuid) s\n                    ON c.id = s.latestConsent\n                    GROUP BY 1",
                $from,
                $to,
                $context
            ),
            ARRAY_A
        );
        foreach ($rows as $row) {
            $result[$row['custom_bypass']] = \intval($row['cnt']);
        }
        return $result;
    }
}
