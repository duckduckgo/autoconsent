import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auchantelecom.fr_z3n', ['https://www.auchantelecom.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
