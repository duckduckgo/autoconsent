import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_deeceestyle.ch_60v', ['https://deeceestyle.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
