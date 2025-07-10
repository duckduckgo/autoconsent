import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_nfl.com_3a6', ['https://www.nfl.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
