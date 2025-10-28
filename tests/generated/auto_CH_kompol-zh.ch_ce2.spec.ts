import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kompol-zh.ch_ce2', ['https://www.kompol-zh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
