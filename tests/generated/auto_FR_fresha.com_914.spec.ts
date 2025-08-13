import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_914', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
