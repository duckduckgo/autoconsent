import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_crgf.efno.fr_lp8', ['https://crgf.efno.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
