import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_laregion.fr_5tk', ['https://www.laregion.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
