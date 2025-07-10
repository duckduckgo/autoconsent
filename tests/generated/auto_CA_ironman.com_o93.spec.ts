import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_ironman.com_o93', ['https://www.ironman.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
