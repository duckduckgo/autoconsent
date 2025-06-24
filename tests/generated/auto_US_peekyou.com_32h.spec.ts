import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_peekyou.com_32h', ['https://www.peekyou.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
