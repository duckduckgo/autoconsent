import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ephy.anses.fr_4x3', ['https://ephy.anses.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
