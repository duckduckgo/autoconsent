import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_france-galop.com_s9m', ['https://www.france-galop.com/fr'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
