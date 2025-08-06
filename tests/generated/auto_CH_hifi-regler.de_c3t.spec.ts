import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hifi-regler.de_c3t', ['https://www.hifi-regler.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
