import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_moen.com_y8v', ['https://www.moen.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
