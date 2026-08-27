import generateCMPTests from '../playwright/runner';

generateCMPTests('walmart-ca', ['https://www.walmart.ca/en', 'https://www.walmart.ca/fr'], { testOptIn: false, testSelfTest: false });
