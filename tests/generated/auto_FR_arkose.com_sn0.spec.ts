import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_arkose.com_sn0', ['https://arkose.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
