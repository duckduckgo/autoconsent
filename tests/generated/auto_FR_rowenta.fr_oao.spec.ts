import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rowenta.fr_oao', ['https://www.rowenta.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
