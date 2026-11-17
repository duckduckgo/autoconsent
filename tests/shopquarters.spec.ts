import generateCMPTests from '../playwright/runner';

generateCMPTests('shopquarters', ['https://shopquarters.com/'], {
    testSelfTest: false,
});
