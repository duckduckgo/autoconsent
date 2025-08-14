import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_nimes.fr_wro', ['https://www.nimes.fr/accueil'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
