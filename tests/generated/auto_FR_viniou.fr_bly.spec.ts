import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_viniou.fr_bly', ['https://www.viniou.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
