import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_marvin.com_0', ['https://www.marvin.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
