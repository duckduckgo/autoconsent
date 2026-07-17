import generateCMPTests from '../playwright/runner';

generateCMPTests('ourworldindata', [
    'https://ourworldindata.org/',
    'https://ourworldindata.org/grapher/share-of-individuals-using-the-internet',
]);
