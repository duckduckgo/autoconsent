import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bdo.ca_3o4', ['https://www.bdo.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
