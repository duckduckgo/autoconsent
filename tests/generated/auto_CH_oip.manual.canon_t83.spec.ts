import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oip.manual.canon_t83', ['https://oip.manual.canon/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
