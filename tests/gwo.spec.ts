import generateCMPTests from '../playwright/runner';

// The site reloads the page after consent is saved, so the self-test runs on a fresh page.
generateCMPTests('gwo', ['https://gwo.pl/', 'https://akademia.gwo.pl/', 'https://multimedia.gwo.pl/'], {
    testSelfTest: false,
});
