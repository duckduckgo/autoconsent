import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_anfr.fr_7q3', ['https://www.anfr.fr/accueil'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
