import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maxxess.fr_tx1', ['https://www.maxxess.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
