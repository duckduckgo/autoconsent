import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_xplore.ca_ft0', ['https://www.xplore.ca/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
