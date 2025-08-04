import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_0pb', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
