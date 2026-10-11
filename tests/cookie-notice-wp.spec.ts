import generateCMPTests from '../playwright/runner';

generateCMPTests('cookie-notice-wp', [
    'https://www.stmarytx.edu/',
    'https://io-tech.fi/',
    'https://prepressure.com/',
    // no reject button, close icon rejects
    'https://theisozone.com/',
    'https://dcrazed.com/',
]);
