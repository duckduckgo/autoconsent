import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cegepgim.ca_5d0', ['https://cegepgim.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
