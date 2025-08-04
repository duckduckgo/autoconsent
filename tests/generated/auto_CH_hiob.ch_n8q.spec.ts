import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hiob.ch_n8q', ['https://hiob.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
