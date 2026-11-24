import generateCMPTests from '../playwright/runner';

generateCMPTests('allwyn.cz', ['https://www.allwyn.cz/'], {
    testSelfTest: false,
});
