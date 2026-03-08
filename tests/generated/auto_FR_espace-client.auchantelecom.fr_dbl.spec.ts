import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_espace-client.auchantelecom.fr_dbl', ['https://espace-client.auchantelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
