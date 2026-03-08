import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fiche-paie.fr_9eu', ['https://fiche-paie.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
