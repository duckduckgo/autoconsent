import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_unimedizin-ffm.de_js1', ['https://www.unimedizin-ffm.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
