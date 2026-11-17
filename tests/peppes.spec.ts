import generateCMPTests from '../playwright/runner';

generateCMPTests('peppes.no', ['https://order.peppes.no/'], {
    testSelfTest: false,
});
