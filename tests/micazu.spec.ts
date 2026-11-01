import generateCMPTests from '../playwright/runner';

// The popup links to a settings page, where the final opt-out happens
generateCMPTests('micazu-settings', ['https://www.micazu.nl/', 'https://www.micazu.de/', 'https://www.micazu.fr/'], {
    // opt-in is handled by the intermediate popup rule, which never reaches the settings page
    testOptIn: false,
    // the settings page redirects back right after saving, so the self test cannot run
    testSelfTest: false,
});
