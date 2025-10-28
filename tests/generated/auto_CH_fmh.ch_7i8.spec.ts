import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fmh.ch_7i8', ['https://www.fmh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
