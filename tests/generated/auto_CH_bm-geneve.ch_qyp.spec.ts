import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bm-geneve.ch_qyp', ['https://www.bm-geneve.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
