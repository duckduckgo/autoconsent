import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_konstanz.de_kkv', ['https://www.konstanz.de/start'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
