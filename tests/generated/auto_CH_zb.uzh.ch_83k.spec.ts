import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zb.uzh.ch_83k', ['https://www.zb.uzh.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
