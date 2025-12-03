import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lcl.fr_g8h', ['https://www.lcl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
