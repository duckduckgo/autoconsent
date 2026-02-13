import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_i-ch.ch_g5q', ['https://i-ch.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
