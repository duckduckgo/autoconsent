import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_3suisses.fr_d1o', ['https://www.3suisses.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
