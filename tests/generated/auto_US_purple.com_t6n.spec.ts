import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_purple.com_t6n', ['https://purple.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
