import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ffzh.ch_ppa', ['https://ffzh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
