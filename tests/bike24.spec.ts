import generateCMPTests from '../playwright/runner';

generateCMPTests('bike24', ['https://www.bike24.de/', 'https://www.bike24.com/', 'https://www.bike24.fr/', 'https://www.bike24.es/'], {
    testSelfTest: false,
});
