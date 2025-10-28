import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-lyon.fr_37k', ['https://www.ac-lyon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
