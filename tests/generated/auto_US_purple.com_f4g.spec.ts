import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_purple.com_f4g', ['https://purple.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
