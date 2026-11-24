import generateCMPTests from '../playwright/runner';

generateCMPTests('grocefully', ['https://www.grocefully.com/'], {
    testSelfTest: false,
});
