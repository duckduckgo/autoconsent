import generateCMPTests from '../playwright/runner';

generateCMPTests('bike24', ['https://www.bike24.com/', 'https://www.bike24.nl/', 'https://www.bike24.it/', 'https://www.bike24.de/'], {
    testSelfTest: false,
});
