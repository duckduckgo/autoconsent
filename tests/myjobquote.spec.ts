import generateCMPTests from '../playwright/runner';

generateCMPTests('myjobquote', ['https://www.myjobquote.co.uk/'], {
    testSelfTest: false,
});
