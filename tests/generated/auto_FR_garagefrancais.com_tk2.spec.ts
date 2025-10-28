import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_garagefrancais.com_tk2', ['https://garagefrancais.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
