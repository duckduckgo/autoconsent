import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_airsoft-entrepot.fr_8jn', ['https://www.airsoft-entrepot.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
