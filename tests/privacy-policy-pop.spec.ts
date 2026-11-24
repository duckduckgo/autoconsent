import generateCMPTests from '../playwright/runner';

generateCMPTests('privacy-policy-pop', [
    'https://www.promospro.de/',
    'https://www.codeswall.com/',
    'https://www.alle.codes/',
    'https://newblackfriday.com/',
]);
