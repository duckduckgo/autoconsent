import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gites.fr_b6p', ['https://www.gites.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
