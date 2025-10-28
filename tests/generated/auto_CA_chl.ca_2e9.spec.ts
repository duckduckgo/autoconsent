import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chl.ca_2e9', ['https://chl.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
