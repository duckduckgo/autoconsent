import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maiia.com_u0h', ['https://www.maiia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
