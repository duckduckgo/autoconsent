import generateCMPTests from '../playwright/runner';

generateCMPTests('loescher', ['https://www.loescher.it/', 'https://formazione.loescher.it/'], {
    testSelfTest: false,
});
