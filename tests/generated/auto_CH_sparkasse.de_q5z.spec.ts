import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sparkasse.de_q5z', ['https://www.sparkasse.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
