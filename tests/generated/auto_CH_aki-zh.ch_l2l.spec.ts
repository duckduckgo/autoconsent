import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_aki-zh.ch_l2l', ['https://aki-zh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
