import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fresha.com_39h', ['https://www.fresha.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
