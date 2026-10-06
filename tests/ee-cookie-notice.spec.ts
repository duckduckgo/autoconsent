import generateCMPTests from '../playwright/runner';

generateCMPTests('ee-cookie-notice', [
    'https://www.bellegrove.org/',
    'https://www.ampmfg.com/',
    'https://www.artsmn.org/',
    'https://www.mattercpa.com/',
    'https://www.isthmusengineering.com/',
]);
