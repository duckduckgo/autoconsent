import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_olympic.ca_2t5', ['https://olympic.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
