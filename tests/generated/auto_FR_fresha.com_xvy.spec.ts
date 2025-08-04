import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_xvy', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
