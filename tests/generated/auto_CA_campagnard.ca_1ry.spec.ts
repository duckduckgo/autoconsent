import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_campagnard.ca_1ry', ['https://campagnard.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
