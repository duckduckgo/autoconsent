import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_zacks.com_0', ['https://www.zacks.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
