import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kwtx.com_1et', ['https://www.kwtx.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
