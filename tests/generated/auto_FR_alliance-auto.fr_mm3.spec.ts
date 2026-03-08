import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alliance-auto.fr_mm3', ['https://alliance-auto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
