import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vss.ch_ub1', ['https://www.vss.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
