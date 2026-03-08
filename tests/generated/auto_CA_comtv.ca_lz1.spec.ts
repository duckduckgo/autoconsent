import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_comtv.ca_lz1', ['https://comtv.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
