import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gentek.ca_0li', ['https://www.gentek.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
