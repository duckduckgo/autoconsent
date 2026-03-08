import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_auxiga.com_lk7', ['https://auxiga.com/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
