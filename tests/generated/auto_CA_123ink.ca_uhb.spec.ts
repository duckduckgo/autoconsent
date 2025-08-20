import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_123ink.ca_uhb', ['https://www.123ink.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
