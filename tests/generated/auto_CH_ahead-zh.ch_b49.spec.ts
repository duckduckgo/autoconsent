import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ahead-zh.ch_b49', ['https://ahead-zh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
