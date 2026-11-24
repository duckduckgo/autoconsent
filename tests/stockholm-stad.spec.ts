import generateCMPTests from '../playwright/runner';

generateCMPTests('stockholm-stad', [
    'https://stockholmskallan.stockholm.se/',
    'https://start.stockholm/',
    'https://stadsarkivet.stockholm/',
]);
