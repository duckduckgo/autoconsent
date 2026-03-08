import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_derrerag.ch_j3w', ['https://derrerag.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
