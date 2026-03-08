import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.bongacams.fr_14x', ['https://fr.bongacams.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
