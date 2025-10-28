import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lyon.fr_265', ['https://www.lyon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
