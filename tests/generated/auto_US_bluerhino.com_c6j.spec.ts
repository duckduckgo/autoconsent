import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_bluerhino.com_c6j', ['https://bluerhino.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
