import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-reims.fr_ve3', ['https://www.ac-reims.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
