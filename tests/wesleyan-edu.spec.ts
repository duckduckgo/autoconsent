import generateCMPTests from '../playwright/runner';

generateCMPTests('wesleyan.edu', ['https://www.wesleyan.edu/cgs/osa/', 'https://www.wesleyan.edu/'], {
    testOptIn: false,
    testSelfTest: false,
});
