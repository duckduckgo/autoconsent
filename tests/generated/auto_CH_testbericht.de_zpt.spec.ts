import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_testbericht.de_zpt', ['https://www.testbericht.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
