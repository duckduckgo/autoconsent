import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_we-online.com_m9f', ['https://www.we-online.com/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
