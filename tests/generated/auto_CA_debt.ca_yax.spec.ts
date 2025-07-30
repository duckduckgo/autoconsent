import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_debt.ca_yax', ['https://www.debt.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
