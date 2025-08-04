import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_afterall.com_0fn', ['https://www.afterall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
