import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maif.fr_h0f', ['https://www.maif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
