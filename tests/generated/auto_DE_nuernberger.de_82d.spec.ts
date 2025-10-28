import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nuernberger.de_82d', ['https://www.nuernberger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
