import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieinfoscript', ['https://www.uketropolis.com/'], {
    testOptIn: false,
    testSelfTest: false,
});
