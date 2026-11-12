import generateCMPTests from '../playwright/runner';

generateCMPTests('mediately', ['https://mediately.co/', 'https://mediately.co/it'], {
    testOptIn: false,
    testSelfTest: false,
});
