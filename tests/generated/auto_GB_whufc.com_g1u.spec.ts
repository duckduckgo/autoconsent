import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_whufc.com_g1u', ['https://www.whufc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
