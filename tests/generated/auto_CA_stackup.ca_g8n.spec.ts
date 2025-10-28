import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stackup.ca_g8n', ['https://www.stackup.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
