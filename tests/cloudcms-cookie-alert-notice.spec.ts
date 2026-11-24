import generateCMPTests from '../playwright/runner';

generateCMPTests('cloudcms-cookie-alert-notice', [
    'https://pgedystrybucja.pl/',
    'https://pge-obrot.pl/',
    // acknowledge-style button text
    'https://pgegiek.pl/',
    // no cookie mode attribute on html
    'https://fjp.org.pl/',
]);
