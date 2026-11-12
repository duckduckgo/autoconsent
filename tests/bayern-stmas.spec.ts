import generateCMPTests from '../playwright/runner';

generateCMPTests('bayern-stmas', [
    'https://www.zbfs.bayern.de/',
    'https://www.familienhandbuch.de/',
    'https://www.bayern-gegen-gewalt.de/',
]);
