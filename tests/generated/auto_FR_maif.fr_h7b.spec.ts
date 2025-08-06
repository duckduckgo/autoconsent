import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maif.fr_h7b', ['https://www.maif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
