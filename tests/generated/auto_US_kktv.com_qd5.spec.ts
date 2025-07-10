import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_kktv.com_qd5', ['https://www.kktv.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
