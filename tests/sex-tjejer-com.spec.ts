import generateCMPTests from '../playwright/runner';

generateCMPTests('sex-tjejer.com', ['https://sex-tjejer.com/'], {
    testOptIn: false,
    testSelfTest: false,
});
