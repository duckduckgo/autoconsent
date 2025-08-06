import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_xplore.ca_wwx', ['https://www.xplore.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
