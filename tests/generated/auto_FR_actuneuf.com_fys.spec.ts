import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actuneuf.com_fys', ['https://actuneuf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
