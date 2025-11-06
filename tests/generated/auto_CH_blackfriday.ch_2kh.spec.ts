import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blackfriday.ch_2kh', ['https://blackfriday.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
