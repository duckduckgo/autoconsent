import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kcom.com_hfm', ['https://www.kcom.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
