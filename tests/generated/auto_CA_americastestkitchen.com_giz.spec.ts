import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_americastestkitchen.com_giz', ['https://www.americastestkitchen.com/'], {
    testOptIn: false,
    testSelfTest: false,
    onlyRegions: ['CA'],
});
