import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_petsmart.ca_5hk', ['https://www.petsmart.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
