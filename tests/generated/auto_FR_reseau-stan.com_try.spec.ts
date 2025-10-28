import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_reseau-stan.com_try', ['https://www.reseau-stan.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
