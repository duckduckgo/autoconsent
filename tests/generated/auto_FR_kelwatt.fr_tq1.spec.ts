import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kelwatt.fr_tq1', ['https://www.kelwatt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
