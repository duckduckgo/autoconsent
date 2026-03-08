import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cc-plainedelain.fr_dz6', ['https://cc-plainedelain.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
