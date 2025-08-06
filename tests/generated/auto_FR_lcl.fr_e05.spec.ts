import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lcl.fr_e05', ['https://www.lcl.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
