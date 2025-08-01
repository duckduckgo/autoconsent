import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_journaux.fr_gjs', ['https://www.journaux.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
