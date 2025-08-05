import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_bve', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
