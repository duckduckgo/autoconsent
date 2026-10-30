import generateCMPTests from '../playwright/runner';

// opt-in reloads the page, which makes the test flaky
generateCMPTests('shimano-bike', ['https://bike.shimano.com/', 'https://bike.shimano.com/de-CH/home.html'], {
    testOptIn: false,
});
