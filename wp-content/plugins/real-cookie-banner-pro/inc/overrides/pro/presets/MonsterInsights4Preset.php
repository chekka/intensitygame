<?php

namespace DevOwl\RealCookieBanner\lite\presets;

use DevOwl\RealCookieBanner\presets\pro\MonsterInsights4Preset as ProMonsterInsights4Preset;
use DevOwl\RealCookieBanner\presets\pro\MonsterInsightsPreset;
use DevOwl\RealCookieBanner\presets\middleware\DisablePresetByNeedsMiddleware;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * MonsterInsights preset -> Google Analytics (Analytics 4) cookie preset.
 */
class MonsterInsights4Preset extends \DevOwl\RealCookieBanner\presets\pro\MonsterInsights4Preset {
    // Documented in AbstractPreset
    public function common() {
        $parent = parent::common();
        return \array_merge($parent, [
            'attributes' => [
                'extends' => \DevOwl\RealCookieBanner\lite\presets\GoogleAnalytics4Preset::IDENTIFIER,
                'shouldRemoveTechnicalHandlingWhenOneOf' => \DevOwl\RealCookieBanner\presets\middleware\DisablePresetByNeedsMiddleware::generateNeedsForSlugs(
                    [
                        \DevOwl\RealCookieBanner\presets\pro\MonsterInsightsPreset::SLUG_FREE,
                        \DevOwl\RealCookieBanner\presets\pro\MonsterInsightsPreset::SLUG_PRO
                    ]
                ),
                'technicalHandlingNotice' => \join(' ', [
                    \sprintf(
                        // translators:
                        __(
                            'Please do not forget to activate the option <a href="%s" target="_blank">Anonymize IP Addresses</a> in MonsterInsights to comply with the GDPR. If you enable the "Cross Domain Tracking" feature, you must also set the corresponding additional cookies here.',
                            RCB_TD
                        ),
                        admin_url('admin.php?page=monsterinsights_settings#/engagement')
                    ),
                    \sprintf(
                        '<a href="%s" target="_blank">%s</a>',
                        esc_attr(__('https://devowl.io/2021/embed-monsterinsights-website/', RCB_TD)),
                        \sprintf(
                            // translators:
                            __('Learn more about %s and the GDPR!', RCB_TD),
                            'MonsterInsights'
                        )
                    )
                ])
            ]
        ]);
    }
    // Documented in AbstractPreset
    public function managerNone() {
        return \false;
    }
    // Documented in AbstractPreset
    public function managerGtm() {
        return \false;
    }
    // Documented in AbstractPreset
    public function managerMtm() {
        return \false;
    }
}
