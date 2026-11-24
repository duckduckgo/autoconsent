import generateCMPTests from '../playwright/runner';

// the site reloads right after opt-out, so the self-test result is lost
generateCMPTests('gjerrigknark', ['https://gjerrigknark.com/'], {
    testSelfTest: false,
});
