import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_118000.fr_uyx', ['https://www.118000.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
