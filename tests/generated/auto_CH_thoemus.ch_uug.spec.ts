import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thoemus.ch_uug', ['https://thoemus.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
