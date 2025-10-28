import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amour-sucre.fr_x0r', ['https://amour-sucre.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
