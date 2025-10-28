import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_moen.ca_lv5', ['https://www.moen.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
