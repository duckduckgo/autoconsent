import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maif.fr_vog', ['https://www.maif.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
