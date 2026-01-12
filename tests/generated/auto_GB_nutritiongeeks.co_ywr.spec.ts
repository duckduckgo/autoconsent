import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nutritiongeeks.co_ywr', ['https://www.nutritiongeeks.co/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
