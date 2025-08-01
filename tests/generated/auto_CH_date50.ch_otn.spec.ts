import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_date50.ch_otn', ['https://www.date50.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
