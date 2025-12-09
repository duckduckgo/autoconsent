import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_floabank.fr_qjv', ['https://www.floabank.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
