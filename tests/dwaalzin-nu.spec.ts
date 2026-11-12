import generateCMPTests from '../playwright/runner';

// the site reloads the page after the banner is dismissed, so the self-test runs on a fresh page
generateCMPTests('dwaalzin.nu', ['https://dwaalzin.nu/'], {
    testSelfTest: false,
});
