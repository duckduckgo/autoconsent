import generateCMPTests from '../playwright/runner';

// The site reloads the page after saving the preference, so the self-test cannot run.
generateCMPTests('olvg', ['https://www.olvg.nl/'], {
    testSelfTest: false,
});
