import generateCMPTests from '../playwright/runner';

// rejecting reloads the page, where reverb-gdpr-nag closes the remaining EU notice
generateCMPTests('reverb', ['https://reverb.com/marketplace'], {
    testSelfTest: false,
    expectedRuns: 2,
});
