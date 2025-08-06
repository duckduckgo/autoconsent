import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_classic-days.de_ccd', ['https://www.classic-days.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
