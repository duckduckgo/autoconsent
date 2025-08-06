import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_yespark.fr_y69', ['https://www.yespark.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
