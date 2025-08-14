import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hiob.ch_g7h', ['https://hiob.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
