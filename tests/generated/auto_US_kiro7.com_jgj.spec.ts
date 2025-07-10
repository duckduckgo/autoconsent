import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kiro7.com_jgj', ['https://www.kiro7.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
