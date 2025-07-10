import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gamespot.com_ygo', ['https://www.gamespot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
