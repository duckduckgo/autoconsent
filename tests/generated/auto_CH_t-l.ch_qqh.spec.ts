import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_t-l.ch_qqh', ['https://www.t-l.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
