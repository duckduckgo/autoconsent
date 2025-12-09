import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chronoshop2shop.fr_dkg', ['https://www.chronoshop2shop.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
