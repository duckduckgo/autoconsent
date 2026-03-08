import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cogevie.fr_mbz', ['https://cogevie.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
