import generateCMPTests from '../playwright/runner';

generateCMPTests('123inkt', ['https://www.123ink.se/', 'https://www.123inkt.nl/', 'https://www.123encre.fr/', 'https://www.123tinta.es/'], {
    testSelfTest: false,
});
