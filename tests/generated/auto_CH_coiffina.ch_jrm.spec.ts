import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coiffina.ch_jrm', ['https://coiffina.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
