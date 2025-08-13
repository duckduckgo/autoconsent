import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_on-tenk.com_l09', ['https://www.on-tenk.com/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
