import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kbtx.com_q9y', ['https://www.kbtx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
