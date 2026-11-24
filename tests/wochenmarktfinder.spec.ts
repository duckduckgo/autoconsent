import generateCMPTests from '../playwright/runner';

generateCMPTests('wochenmarktfinder.de', ['https://www.wochenmarktfinder.de/'], {
    testSelfTest: false,
});
