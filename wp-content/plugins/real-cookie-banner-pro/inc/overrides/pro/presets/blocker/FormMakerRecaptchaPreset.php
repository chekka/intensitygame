<?php

namespace DevOwl\RealCookieBanner\lite\presets\blocker;

use DevOwl\RealCookieBanner\comp\language\Hooks;
use DevOwl\RealCookieBanner\presets\pro\GoogleRecaptchaPreset;
use DevOwl\RealCookieBanner\presets\pro\blocker\FormMakerRecaptchaPreset as BlockerFormMakerRecaptchaPreset;
// @codeCoverageIgnoreStart
\defined('ABSPATH') or die('No script kiddies please!');
// Avoid direct file request
// @codeCoverageIgnoreEnd
/**
 * Form Maker with Google reCAPTCHA blocker preset.
 */
class FormMakerRecaptchaPreset extends \DevOwl\RealCookieBanner\presets\pro\blocker\FormMakerRecaptchaPreset {
    // Documented in AbstractPreset
    public function common() {
        $parent = parent::common();
        return \array_merge($parent, [
            'attributes' => \array_merge(
                [
                    'name' => __(
                        'Form Maker with Google reCAPTCHA',
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
                    'serviceTemplates' => [\DevOwl\RealCookieBanner\presets\pro\GoogleRecaptchaPreset::IDENTIFIER],
                    'shouldForceToShowVisual' => \true
                ],
                $parent['attributes']
            )
        ]);
    }
}
