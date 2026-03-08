import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fichexpress.fr_mpy', ['https://fichexpress.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
