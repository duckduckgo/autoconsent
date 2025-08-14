import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edeka.de_zkn', ['https://www.edeka.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
