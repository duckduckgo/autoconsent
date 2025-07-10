import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_gulfnews.com_5bg', ['https://gulfnews.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
