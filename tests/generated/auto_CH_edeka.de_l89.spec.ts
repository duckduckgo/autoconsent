import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edeka.de_l89', ['https://www.edeka.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
