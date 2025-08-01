import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_riehen.ch_cd6', ['https://riehen.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
