import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_guimet.fr_kfi', ['https://www.guimet.fr/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
