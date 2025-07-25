import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actuneuf.com_tvm', ['https://actuneuf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
