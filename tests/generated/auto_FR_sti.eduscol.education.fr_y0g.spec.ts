import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_sti.eduscol.education.fr_y0g', ['https://sti.eduscol.education.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
