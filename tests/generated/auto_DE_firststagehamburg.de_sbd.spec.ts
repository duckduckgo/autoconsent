import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_firststagehamburg.de_sbd', ['https://firststagehamburg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
