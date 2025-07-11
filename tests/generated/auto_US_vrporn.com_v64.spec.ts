import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_vrporn.com_v64', ['https://vrporn.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
