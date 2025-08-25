import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bordet.fr_e0w', ['https://www.bordet.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
