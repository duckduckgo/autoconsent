import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_canpl.ca_g83', ['https://www.canpl.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
