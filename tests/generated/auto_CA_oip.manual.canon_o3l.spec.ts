import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_oip.manual.canon_o3l', ['https://oip.manual.canon/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
