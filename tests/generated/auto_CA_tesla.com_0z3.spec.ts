import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_tesla.com_0z3', ['https://www.tesla.com/en_gb/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
