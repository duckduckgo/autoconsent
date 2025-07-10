import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_wowt.com_t16', ['https://www.wowt.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
