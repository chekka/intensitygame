<?php

namespace DevOwl\RealCookieBanner\lite\presets\blocker;

use DevOwl\RealCookieBanner\comp\language\Hooks;
use DevOwl\RealCookieBanner\presets\pro\GoogleRecaptchaPreset;
use DevOwl\RealCookieBanner\presets\pro\blocker\NinjaFormsPreset as BlockerNinjaFormsPreset;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Ninja Forms with Google reCAPTCHA blocker preset.
 */
class NinjaFormsPreset extends \DevOwl\RealCookieBanner\presets\pro\blocker\NinjaFormsPreset {
    // Documented in AbstractPreset
    public function common() {
        $parent = parent::common();
        return \array_merge($parent, [
            'attributes' => \array_merge(
                [
                    'name' => __(
                        'Ninja Forms with Google reCAPTCHA',
                        \DevOwl\RealCookieBanner\comp\language\Hooks::TD_FORCED
                    ),
                    'description' => \sprintf(
                        // translators:
                        __(
                            'We use Google reCAPTCHA to protect our forms from spam. You must accept to load Google reCAPTCHA to send us a message via the form. Alternatively, you can email us from your own email client to %s.',
                            \DevOwl\RealCookieBanner\comp\language\Hooks::TD_FORCED
                        ),
                        $this->getAdminEmailLink()
                    ),
                    'serviceTemplates' => [\DevOwl\RealCookieBanner\presets\pro\GoogleRecaptchaPreset::IDENTIFIER]
                ],
                $parent['attributes']
            )
        ]);
    }
}