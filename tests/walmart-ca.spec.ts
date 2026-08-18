import generateCMPTests from '../playwright/runner';

generateCMPTests('walmart-ca', ['https://www.walmart.ca/en'], { testOptIn: false, testSelfTest: false });
