import generateCMPTests from '../playwright/runner';

generateCMPTests('ee-consent-notice', [
    'https://bryantpark.org/activities/category/winter-village',
    'https://assuredguaranty.com/',
    'https://www.janorth.org/',
    'https://bellegrove.org/',
    'https://artsmn.org/',
]);
