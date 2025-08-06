import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rbg.ca_1p0', ['https://www.rbg.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
