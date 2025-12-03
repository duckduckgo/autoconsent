import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tfgm.com_0', ['https://tfgm.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
