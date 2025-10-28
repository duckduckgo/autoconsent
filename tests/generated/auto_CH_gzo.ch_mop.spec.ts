import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gzo.ch_mop', ['https://www.gzo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
