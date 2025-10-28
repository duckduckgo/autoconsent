import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ticino.ch_rh9', ['https://www.ticino.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
