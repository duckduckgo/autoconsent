import generateCMPTests from '../playwright/runner';

// saving settings reloads the page, so the self-test result is lost
generateCMPTests('cloudcms-cookie-alert', ['https://pgeenergiaciepla.pl/', 'https://pgebaltica.pl/'], {
    testSelfTest: false,
});
