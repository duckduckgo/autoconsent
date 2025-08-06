import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_universpharmacie.fr_8qg', ['https://universpharmacie.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
