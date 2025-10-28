import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_soeur.fr_2n9', ['https://www.soeur.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
