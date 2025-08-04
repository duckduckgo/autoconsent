import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hiob.ch_py1', ['https://hiob.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
