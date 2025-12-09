import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_211ontario.ca_8ok', ['https://211ontario.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
