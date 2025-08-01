import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_vevor.fr_e7r', ['https://www.vevor.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
