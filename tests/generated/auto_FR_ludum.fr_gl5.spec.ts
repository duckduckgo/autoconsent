import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ludum.fr_gl5', ['https://www.ludum.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
