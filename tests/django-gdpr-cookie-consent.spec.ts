import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'django-gdpr-cookie-consent',
    [
        // <dialog id="cc_modal_dialog"> template
        'https://alphaspel.se/',
        'https://www.djangotricks.com/',
        // older <div id="cc_modal_window"> template
        'https://buckinghambooks.com/',
        'https://flon.ch/',
    ],
    {},
);
