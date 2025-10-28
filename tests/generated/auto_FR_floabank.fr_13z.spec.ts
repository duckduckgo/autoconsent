import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_floabank.fr_13z', ['https://www.floabank.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
