import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_chausson.fr_h63', ['https://www.chausson.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
