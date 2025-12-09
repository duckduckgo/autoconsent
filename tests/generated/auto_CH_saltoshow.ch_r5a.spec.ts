import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saltoshow.ch_r5a', ['https://www.saltoshow.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
