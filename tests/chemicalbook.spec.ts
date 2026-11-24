import generateCMPTests from '../playwright/runner';

generateCMPTests('chemicalbook', ['https://www.chemicalbook.com/'], {
    testSelfTest: false,
});
