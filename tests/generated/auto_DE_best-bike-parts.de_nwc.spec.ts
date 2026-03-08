import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_best-bike-parts.de_nwc', ['https://best-bike-parts.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
