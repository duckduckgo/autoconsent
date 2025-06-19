import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_CA_asus.com_xvp', ['https://www.asus.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
