import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ckc.ca_d6p', ['https://www.ckc.ca/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
