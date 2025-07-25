import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_meilenoptimieren.com_nhr', ['https://meilenoptimieren.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
