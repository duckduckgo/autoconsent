import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gulfnews.com_t05', ['https://gulfnews.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
