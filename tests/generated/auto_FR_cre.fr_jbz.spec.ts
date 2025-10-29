import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cre.fr_jbz', ['https://www.cre.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
