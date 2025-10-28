import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wix.com_nh4', ['https://www.wix.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
