import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_breitbandmessung.de_m9e', ['https://www.breitbandmessung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
