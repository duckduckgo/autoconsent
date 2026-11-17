import generateCMPTests from '../playwright/runner';

generateCMPTests('jetpens', ['https://www.jetpens.com/'], {
    testSelfTest: false,
});
