import generateCMPTests from '../playwright/runner';

generateCMPTests('aeolservice', ['https://cloud.aeolservice.es/'], {
    testSelfTest: false,
});
