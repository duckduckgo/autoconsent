import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fau.ch_5v0', ['https://fau.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
