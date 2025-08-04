import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_debt.ca_ko5', ['https://www.debt.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
