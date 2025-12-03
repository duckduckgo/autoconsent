import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hmd.com_0', ['https://www.hmd.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
