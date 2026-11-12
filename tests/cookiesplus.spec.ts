import generateCMPTests from '../playwright/runner';

generateCMPTests('cookiesplus', ['https://farmaciasenante.com/', 'https://www.ludum.fr/']);

// the reject button submits a form, reloading the page before the self-test runs
generateCMPTests('cookiesplus', ['https://passion-radio.fr/'], { testSelfTest: false });
