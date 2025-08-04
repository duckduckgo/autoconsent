import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_olympic.ca_5xb', ['https://olympic.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
