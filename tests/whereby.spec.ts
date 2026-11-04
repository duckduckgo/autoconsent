import generateCMPTests from '../playwright/runner';

generateCMPTests('whereby', ['https://whereby.com/', 'https://whereby.com/user/signup'], {
    testSelfTest: false,
});
