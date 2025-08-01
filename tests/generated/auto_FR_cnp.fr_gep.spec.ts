import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnp.fr_gep', ['https://www.cnp.fr/particuliers'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
