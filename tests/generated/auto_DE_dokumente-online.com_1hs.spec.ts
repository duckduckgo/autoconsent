import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dokumente-online.com_1hs', ['https://dokumente-online.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
