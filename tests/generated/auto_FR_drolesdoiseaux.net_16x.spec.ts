import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_drolesdoiseaux.net_16x', ['https://drolesdoiseaux.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
