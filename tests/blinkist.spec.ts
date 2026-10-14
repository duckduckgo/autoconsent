import generateCMPTests from '../playwright/runner';

// The consent modal is only hydrated after the user scrolls, so only detection can be checked here.
generateCMPTests('blinkist', ['https://www.blinkist.com/'], {
    expectPopupOpen: false,
    testOptIn: false,
    testOptOut: false,
    testSelfTest: false,
});
