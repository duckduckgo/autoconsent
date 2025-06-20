import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_opensource.com_6e1', ['https://opensource.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
