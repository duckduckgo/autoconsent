import generateCMPTests from '../playwright/runner';

generateCMPTests('de-volksbank', ['https://www.asnbank.nl/', 'https://www.snsbank.nl/', 'https://www.regiobank.nl/'], {
    testSelfTest: false,
});
