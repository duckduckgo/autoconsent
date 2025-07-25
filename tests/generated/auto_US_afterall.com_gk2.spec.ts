import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_afterall.com_gk2', ['https://www.afterall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
