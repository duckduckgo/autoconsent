import generateCMPTests from '../playwright/runner';

generateCMPTests('gdpr-cookie-notice', [
    'https://www.metabase.com/',
    'https://n1.partners/',
    'https://torrot.com/',
    'https://kuljettajaopetus.fi/',
]);
