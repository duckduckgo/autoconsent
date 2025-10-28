import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_comparateurbanque.com_uo1', ['https://www.comparateurbanque.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
