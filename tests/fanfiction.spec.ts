import generateCMPTests from '../playwright/runner';

generateCMPTests('fanfiction', [
    'https://m.fanfiction.net/',
    'https://www.fanfiction.net/',
    'https://www.fictionpress.com/',
    'https://m.fictionpress.com/',
]);
