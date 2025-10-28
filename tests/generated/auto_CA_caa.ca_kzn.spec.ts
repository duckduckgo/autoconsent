import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_caa.ca_kzn', ['https://www.caa.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
