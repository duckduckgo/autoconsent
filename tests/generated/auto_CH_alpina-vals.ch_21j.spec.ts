import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alpina-vals.ch_21j', ['https://alpina-vals.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
