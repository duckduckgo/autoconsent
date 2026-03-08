import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dr-paraskevas.fr_mu7', ['https://dr-paraskevas.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
