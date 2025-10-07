import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mgp.fr_254', ['https://www.mgp.fr/accueil'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
