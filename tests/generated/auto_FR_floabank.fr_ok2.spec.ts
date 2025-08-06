import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_floabank.fr_ok2', ['https://www.floabank.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
