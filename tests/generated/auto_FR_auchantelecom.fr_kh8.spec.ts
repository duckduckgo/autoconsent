import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auchantelecom.fr_kh8', ['https://www.auchantelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
