import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oip.manual.canon_x7n', ['https://oip.manual.canon/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
