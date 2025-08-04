import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_hd4', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
