import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nanterre.fr_zn8', ['https://www.nanterre.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
