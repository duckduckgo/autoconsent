import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dext.com_633', ['https://dext.com/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
