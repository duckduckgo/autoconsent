import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_awsolutions.fr_033', ['https://awsolutions.fr/blog/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
