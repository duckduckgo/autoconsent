import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_visa.ca_rlc', ['https://www.visa.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
