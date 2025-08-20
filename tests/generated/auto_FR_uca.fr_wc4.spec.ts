import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_uca.fr_wc4', ['https://www.uca.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
