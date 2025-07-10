import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_uproxx.com_t2u', ['https://uproxx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
