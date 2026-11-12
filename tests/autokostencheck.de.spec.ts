import generateCMPTests from '../playwright/runner';

generateCMPTests('autokostencheck.de', ['https://www.autokostencheck.de/'], {
    // the site reloads the page after the cookiefirst choice is saved
    testSelfTest: false,
    skipRegions: ['US'],
});
