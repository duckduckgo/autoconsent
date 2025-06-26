import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_opensource.com_g3r', ['https://opensource.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
