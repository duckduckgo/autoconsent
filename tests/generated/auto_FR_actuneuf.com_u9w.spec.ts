import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_actuneuf.com_u9w', ['https://actuneuf.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
