import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_unimedizin-ffm.de_8j6', ['https://www.unimedizin-ffm.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
