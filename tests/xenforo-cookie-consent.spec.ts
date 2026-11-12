import generateCMPTests from '../playwright/runner';

// XenForo reloads the page after saving consent, so the in-page self-test cannot complete
generateCMPTests('xenforo-cookie-consent', ['https://www.macuser.de/', 'https://thehostingforums.com/'], {
    testSelfTest: false,
});
