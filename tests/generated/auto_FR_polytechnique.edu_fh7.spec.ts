import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_polytechnique.edu_fh7', ['https://www.polytechnique.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
