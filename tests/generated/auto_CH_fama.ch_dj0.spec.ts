import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fama.ch_dj0', ['https://fama.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
