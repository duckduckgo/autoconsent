import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_psy.ch_w2l', ['https://www.psy.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
