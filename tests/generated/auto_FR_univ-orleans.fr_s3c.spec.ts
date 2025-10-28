import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_univ-orleans.fr_s3c', ['https://www.univ-orleans.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
