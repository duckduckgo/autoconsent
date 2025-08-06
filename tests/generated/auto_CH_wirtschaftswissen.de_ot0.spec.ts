import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wirtschaftswissen.de_ot0', ['https://www.wirtschaftswissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
