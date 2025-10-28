import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_spareka.fr_tw0', ['https://www.spareka.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
