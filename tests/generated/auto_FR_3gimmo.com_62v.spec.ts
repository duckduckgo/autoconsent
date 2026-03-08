import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_3gimmo.com_62v', ['https://3gimmo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
