import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_ke1', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
