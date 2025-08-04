import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_afterall.com_lid', ['https://www.afterall.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
