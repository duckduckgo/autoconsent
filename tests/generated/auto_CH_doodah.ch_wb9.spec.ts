import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_doodah.ch_wb9', ['https://doodah.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
