import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_legavox.fr_99u', ['https://www.legavox.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
