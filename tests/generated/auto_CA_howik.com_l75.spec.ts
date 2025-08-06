import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_l75', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
