<?php

namespace DevOwl\RealCookieBanner\lite\presets\blocker;

use DevOwl\RealCookieBanner\presets\pro\GAGoogleAnalytics4Preset as PresetsGAGoogleAnalytics4Preset;
use DevOwl\RealCookieBanner\presets\pro\blocker\GAGoogleAnalytics4Preset as BlockerGAGoogleAnalytics4Preset;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * GA Google Analytics (V4) preset -> Google Analytics (V4) blocker preset.
 */
class GAGoogleAnalytics4Preset extends \DevOwl\RealCookieBanner\presets\pro\blocker\GAGoogleAnalytics4Preset {
    // Documented in AbstractPreset
    public function common() {
        $parent = parent::common();
        return \array_merge($parent, [
            'attributes' => \array_merge(
                [
                    'name' => $parent['name'],
                    'serviceTemplates' => [\DevOwl\RealCookieBanner\presets\pro\GAGoogleAnalytics4Preset::IDENTIFIER],
                    'isVisual' => \false
                ],
                $parent['attributes']
            )
        ]);
    }
}
