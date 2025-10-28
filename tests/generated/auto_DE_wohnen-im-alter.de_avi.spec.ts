import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wohnen-im-alter.de_avi', ['https://www.wohnen-im-alter.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
