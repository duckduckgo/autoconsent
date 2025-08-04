import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_olympic.ca_ddd', ['https://olympic.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
