import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_labresse.labellemontagne.com_ahj', ['https://labresse.labellemontagne.com/fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
