import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kelwatt.fr_1jt', ['https://www.kelwatt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
