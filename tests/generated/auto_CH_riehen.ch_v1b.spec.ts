import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_riehen.ch_v1b', ['https://riehen.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
