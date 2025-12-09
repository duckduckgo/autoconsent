import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cre.fr_4ya', ['https://www.cre.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
