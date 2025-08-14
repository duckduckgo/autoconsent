import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wangerooge.de_6sy', ['https://www.wangerooge.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
