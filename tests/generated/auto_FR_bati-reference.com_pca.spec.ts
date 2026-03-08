import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bati-reference.com_pca', ['https://bati-reference.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
