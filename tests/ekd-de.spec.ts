import generateCMPTests from '../playwright/runner';

generateCMPTests('ekd.de', ['https://www.ekd.de/', 'https://www.ekd.de/en/'], {
    testSelfTest: false,
});
