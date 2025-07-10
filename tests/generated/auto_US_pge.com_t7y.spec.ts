import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_pge.com_t7y', ['https://www.pge.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
