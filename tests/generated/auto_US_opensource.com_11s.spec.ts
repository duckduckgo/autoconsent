import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_opensource.com_11s', ['https://opensource.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
