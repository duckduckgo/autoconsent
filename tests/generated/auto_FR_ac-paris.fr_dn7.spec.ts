import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ac-paris.fr_dn7', ['https://www.ac-paris.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
