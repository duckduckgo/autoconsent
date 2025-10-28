import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_conseildependance.fr_t3l', ['https://www.conseildependance.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
