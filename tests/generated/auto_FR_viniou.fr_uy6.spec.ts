import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_viniou.fr_uy6', ['https://www.viniou.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
