import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_usz.ch_sgv', ['https://www.usz.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
