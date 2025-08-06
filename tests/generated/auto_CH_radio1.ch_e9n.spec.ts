import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_radio1.ch_e9n', ['https://www.radio1.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
