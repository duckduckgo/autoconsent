import generateCMPTests from '../playwright/runner';

generateCMPTests('kvk', ['https://www.kvk.nl/', 'https://www.kvk.nl/mijn-account/'], {
    testOptIn: false,
    testSelfTest: false,
});
