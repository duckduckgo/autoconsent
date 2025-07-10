import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_moen.com_slx', ['https://www.moen.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
