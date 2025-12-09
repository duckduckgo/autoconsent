import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_hisense.fr_yvi', ['https://hisense.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
