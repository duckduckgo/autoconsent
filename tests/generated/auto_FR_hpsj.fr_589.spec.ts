import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hpsj.fr_589', ['https://www.hpsj.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
