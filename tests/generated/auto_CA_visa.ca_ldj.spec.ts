import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_visa.ca_ldj', ['https://www.visa.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
