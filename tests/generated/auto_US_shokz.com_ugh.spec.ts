import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_shokz.com_ugh', ['https://shokz.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
