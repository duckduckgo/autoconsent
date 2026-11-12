import generateCMPTests from '../playwright/runner';

// the site reloads the page after saving consent, so the self-test cannot run
generateCMPTests('brandsforstudents.ch', ['https://brandsforstudents.ch/', 'https://brandsforemployees.ch/'], {
    testSelfTest: false,
});
