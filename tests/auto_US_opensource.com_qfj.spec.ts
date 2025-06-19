import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_opensource.com_qfj', ['https://opensource.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
