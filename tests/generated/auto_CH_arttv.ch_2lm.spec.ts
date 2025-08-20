import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arttv.ch_2lm', ['https://arttv.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
