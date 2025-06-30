import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_123ink.ca_vz5', ['https://www.123ink.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
