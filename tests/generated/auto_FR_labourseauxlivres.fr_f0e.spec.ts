import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labourseauxlivres.fr_f0e', ['https://labourseauxlivres.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
