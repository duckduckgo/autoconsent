import generateCMPTests from '../playwright/runner';

// rejecting reloads the page, which interrupts the self-test
generateCMPTests('dhbbank', ['https://www.dhbbank.de/', 'https://www.dhbbank.nl/', 'https://www.dhbbank.com/', 'https://www.dhbbank.be/'], {
    testSelfTest: false,
});
