import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vidy.ch_2wv', ['https://www.vidy.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
