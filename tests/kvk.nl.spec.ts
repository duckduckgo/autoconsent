import generateCMPTests from '../playwright/runner';

generateCMPTests('kvk.nl', ['https://www.kvk.nl/mijn-account/'], { testOptIn: false });
// saving the choice reloads the page, so the self-test cannot run there
generateCMPTests('kvk.nl', ['https://www.kvk.nl/'], { testOptIn: false, testSelfTest: false });
