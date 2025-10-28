import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nutritionix.com_rhj', ['https://www.nutritionix.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
