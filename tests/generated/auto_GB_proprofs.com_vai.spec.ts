import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_proprofs.com_vai', ['https://www.proprofs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
