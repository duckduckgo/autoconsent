import generateCMPTests from '../playwright/runner';

// the page reloads after a choice is made, so the self-test cannot run on the original document
generateCMPTests('rittal', ['https://www.rittal.com/com-en/', 'https://www.rittal.com/uk-en/', 'https://www.rittal.com/fr-fr/'], {
    testSelfTest: false,
});
