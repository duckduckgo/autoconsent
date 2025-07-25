import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_citroen.fr_vzi', ['https://www.citroen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
