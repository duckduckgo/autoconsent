import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_copsplus.com_yz9', ['https://copsplus.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
