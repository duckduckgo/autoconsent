import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blackfriday.ch_m39', ['https://blackfriday.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
