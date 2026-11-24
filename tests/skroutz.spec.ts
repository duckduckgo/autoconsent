import generateCMPTests from '../playwright/runner';

generateCMPTests('skroutz', ['https://www.skroutz.gr/', 'https://www.skroutz.cy/', 'https://www.skroutz.de/'], {
    // the reject button submits a form, so the page reloads before the self test runs
    testSelfTest: false,
});
