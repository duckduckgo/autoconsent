import generateCMPTests from '../playwright/runner';

generateCMPTests('oventrop', ['https://oventrop.com/'], {
    testSelfTest: false,
});
