import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_intelcom.ca_8kr', ['https://intelcom.ca/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
