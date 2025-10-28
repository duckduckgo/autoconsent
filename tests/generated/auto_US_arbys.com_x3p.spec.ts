import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_arbys.com_x3p', ['https://www.arbys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
