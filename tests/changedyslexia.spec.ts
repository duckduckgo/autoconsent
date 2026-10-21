import generateCMPTests from '../playwright/runner';

generateCMPTests('changedyslexia', ['https://www.changedyslexia.org/'], {
    testSelfTest: false,
});
