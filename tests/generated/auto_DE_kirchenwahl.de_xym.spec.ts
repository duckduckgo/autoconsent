import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirchenwahl.de_xym', ['https://www.kirchenwahl.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
