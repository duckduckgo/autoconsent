import generateCMPTests from '../playwright/runner';

generateCMPTests('kanopy', ['https://www.kanopy.com/'], {
    testSelfTest: false,
});
