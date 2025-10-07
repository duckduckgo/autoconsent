import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_prime-energie-edf.fr_ukc', ['https://www.prime-energie-edf.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
