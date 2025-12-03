import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dpd.com_0', ['https://www.dpd.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
