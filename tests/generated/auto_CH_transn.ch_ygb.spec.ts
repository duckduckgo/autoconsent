import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_transn.ch_ygb', ['https://www.transn.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
