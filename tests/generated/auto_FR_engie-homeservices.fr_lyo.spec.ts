import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_engie-homeservices.fr_lyo', ['https://www.engie-homeservices.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
