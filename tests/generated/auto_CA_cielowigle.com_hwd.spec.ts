import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cielowigle.com_hwd', ['https://cielowigle.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
