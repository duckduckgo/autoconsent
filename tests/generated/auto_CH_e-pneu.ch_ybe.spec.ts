import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_e-pneu.ch_ybe', ['https://e-pneu.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
