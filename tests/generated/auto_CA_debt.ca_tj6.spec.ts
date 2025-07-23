import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_debt.ca_tj6', ['https://www.debt.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
