import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sparkasse.de_eag', ['https://www.sparkasse.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
