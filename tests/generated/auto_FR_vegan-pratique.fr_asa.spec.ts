import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vegan-pratique.fr_asa', ['https://vegan-pratique.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
