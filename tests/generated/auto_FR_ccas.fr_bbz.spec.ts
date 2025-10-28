import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ccas.fr_bbz', ['https://www.ccas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
