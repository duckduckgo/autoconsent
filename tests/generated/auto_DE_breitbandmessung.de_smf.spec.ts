import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_breitbandmessung.de_smf', ['https://www.breitbandmessung.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
