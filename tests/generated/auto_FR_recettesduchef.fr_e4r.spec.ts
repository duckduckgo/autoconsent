import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_recettesduchef.fr_e4r', ['https://www.recettesduchef.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
