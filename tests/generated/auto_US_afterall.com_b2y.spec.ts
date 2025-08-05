import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_afterall.com_b2y', ['https://www.afterall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
