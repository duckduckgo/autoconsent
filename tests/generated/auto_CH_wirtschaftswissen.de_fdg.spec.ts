import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wirtschaftswissen.de_fdg', ['https://www.wirtschaftswissen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
