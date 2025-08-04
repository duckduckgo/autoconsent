import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_debt.ca_j5s', ['https://www.debt.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
