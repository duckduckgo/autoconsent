import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_e-pneu.ch_da1', ['https://e-pneu.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
