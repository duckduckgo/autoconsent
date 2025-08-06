import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnp.fr_pz8', ['https://www.cnp.fr/particuliers'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
