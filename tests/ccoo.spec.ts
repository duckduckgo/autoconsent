import generateCMPTests from '../playwright/runner';

generateCMPTests('ccoo', ['https://ccoo.es/', 'https://ccoo.gal/', 'https://feccoo-madrid.org/', 'https://fsc.ccoo.es/'], {
    testSelfTest: false,
});
