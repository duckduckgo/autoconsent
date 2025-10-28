import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schmidlin.ch_yqh', ['https://www.schmidlin.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
