import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_generali.fr_gjs', ['https://www.generali.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
