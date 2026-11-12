import generateCMPTests from '../playwright/runner';

generateCMPTests('stuvia', ['https://www.stuvia.com/'], {
    testSelfTest: false,
});
