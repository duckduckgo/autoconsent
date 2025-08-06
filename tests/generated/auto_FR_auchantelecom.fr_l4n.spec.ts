import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auchantelecom.fr_l4n', ['https://www.auchantelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
