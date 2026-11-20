import generateCMPTests from '../playwright/runner';

generateCMPTests('noon', ['https://www.noon.com/uae-en/'], {
    testSelfTest: false,
});
