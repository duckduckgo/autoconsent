import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monespace.generali.fr_iuq', ['https://www.monespace.generali.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
