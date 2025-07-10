import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kwtx.com_u8j', ['https://www.kwtx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
