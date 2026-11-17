import generateCMPTests from '../playwright/runner';

generateCMPTests('sparebank1-optin', ['https://www.sparebank1.no/', 'https://www.sparebank1.no/nb/ostlandet/privat.html']);

// the page reloads right after opt-out, which interrupts the self-test
generateCMPTests('sparebank1-optin', ['https://www.eiendomsmegler1.no/'], {
    testSelfTest: false,
});
