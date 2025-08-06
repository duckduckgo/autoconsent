import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_acj', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
