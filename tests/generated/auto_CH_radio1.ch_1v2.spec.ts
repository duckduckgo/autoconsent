import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_radio1.ch_1v2', ['https://www.radio1.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
