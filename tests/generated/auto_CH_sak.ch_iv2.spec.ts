import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sak.ch_iv2', ['https://www.sak.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
