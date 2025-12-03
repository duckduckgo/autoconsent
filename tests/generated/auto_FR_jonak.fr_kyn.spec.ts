import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jonak.fr_kyn', ['https://www.jonak.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
