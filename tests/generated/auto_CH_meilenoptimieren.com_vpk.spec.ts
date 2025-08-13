import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_meilenoptimieren.com_vpk', ['https://meilenoptimieren.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
