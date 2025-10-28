import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_museeduluxembourg.fr_bf8', ['https://museeduluxembourg.fr/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
