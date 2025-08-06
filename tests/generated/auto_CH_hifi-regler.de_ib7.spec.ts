import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hifi-regler.de_ib7', ['https://www.hifi-regler.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
