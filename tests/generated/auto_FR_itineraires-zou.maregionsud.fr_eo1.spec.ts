import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_itineraires-zou.maregionsud.fr_eo1', ['https://itineraires-zou.maregionsud.fr/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
