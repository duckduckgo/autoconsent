import generateCMPTests from '../playwright/runner';

generateCMPTests('livsmedelsverket', ['https://www.livsmedelsverket.se/'], {
    testSelfTest: false,
});
