import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bildung.lebenshilfe-nrw.de_30l', ['https://bildung.lebenshilfe-nrw.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
