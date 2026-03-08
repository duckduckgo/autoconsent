import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_camps.ch_qnj', ['https://camps.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
