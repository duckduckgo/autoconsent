import generateCMPTests from '../playwright/runner';

generateCMPTests('web-rewind.com', ['https://web-rewind.com/'], {
    testSelfTest: false,
});
