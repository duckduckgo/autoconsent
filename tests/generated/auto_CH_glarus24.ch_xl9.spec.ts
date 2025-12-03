import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_glarus24.ch_xl9', ['https://www.glarus24.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
