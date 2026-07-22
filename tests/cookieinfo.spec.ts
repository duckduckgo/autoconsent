import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieinfo', ['https://www.uketropolis.com/'], {
    testOptIn: false,
});
