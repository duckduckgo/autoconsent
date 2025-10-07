import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sierre.ch_g5e', ['https://www.sierre.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
