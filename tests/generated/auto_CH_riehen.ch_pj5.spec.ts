import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_riehen.ch_pj5', ['https://riehen.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
