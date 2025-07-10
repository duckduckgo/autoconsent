import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arbys.com_ah5', ['https://www.arbys.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
