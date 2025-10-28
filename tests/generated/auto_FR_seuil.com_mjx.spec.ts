import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_seuil.com_mjx', ['https://www.seuil.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
