import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_peekyou.com_47v', ['https://www.peekyou.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
