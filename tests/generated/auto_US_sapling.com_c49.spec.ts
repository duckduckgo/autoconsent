import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sapling.com_c49', ['https://www.sapling.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
