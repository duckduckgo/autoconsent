import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_musees.strasbourg.eu_3b7', ['https://www.musees.strasbourg.eu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
