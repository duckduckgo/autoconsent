import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_vrporn.com_p5d', ['https://vrporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
