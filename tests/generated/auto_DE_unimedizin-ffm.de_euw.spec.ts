import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_unimedizin-ffm.de_euw', ['https://www.unimedizin-ffm.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
