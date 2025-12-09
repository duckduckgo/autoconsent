import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_62f', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
