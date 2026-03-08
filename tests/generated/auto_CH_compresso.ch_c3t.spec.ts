import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_compresso.ch_c3t', ['https://compresso.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
