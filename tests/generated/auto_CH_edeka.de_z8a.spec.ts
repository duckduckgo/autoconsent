import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edeka.de_z8a', ['https://www.edeka.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
