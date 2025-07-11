import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_golftown.com_kxn', ['https://www.golftown.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
