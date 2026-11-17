import generateCMPTests from '../playwright/runner';

generateCMPTests('trust360', [
    'https://www.sompo-japan.co.jp/webloan/',
    'https://www.privtech.co.jp/',
    'https://www.nipponsanso.com/',
    'https://www.tn-sanso.co.jp/',
]);
