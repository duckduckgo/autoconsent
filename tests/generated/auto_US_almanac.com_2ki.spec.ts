import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_almanac.com_2ki', ['https://www.almanac.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
