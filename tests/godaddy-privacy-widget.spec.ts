import generateCMPTests from '../playwright/runner';

generateCMPTests('godaddy-privacy-widget', [
    'https://sitecheck.sucuri.net/',
    'https://trodomains.co.uk/',
    'https://www.hosting-options.co.uk/',
    'https://www.my-domains.co.uk/',
]);
