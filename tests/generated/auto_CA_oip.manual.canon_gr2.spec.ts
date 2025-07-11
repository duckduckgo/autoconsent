import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_oip.manual.canon_gr2', ['https://oip.manual.canon/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
