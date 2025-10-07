import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_34d', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
