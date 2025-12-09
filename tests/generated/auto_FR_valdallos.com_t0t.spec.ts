import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_valdallos.com_t0t', ['https://www.valdallos.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
