import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_astag.ch_ucm', ['https://www.astag.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
