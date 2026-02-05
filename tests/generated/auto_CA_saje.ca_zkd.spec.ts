import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_saje.ca_zkd', ['https://www.saje.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
