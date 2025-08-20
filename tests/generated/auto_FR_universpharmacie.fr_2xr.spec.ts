import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_universpharmacie.fr_2xr', ['https://universpharmacie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
