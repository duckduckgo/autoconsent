import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chausson.fr_e3b', ['https://www.chausson.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
