import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_krebsliga.ch_nlx', ['https://www.krebsliga.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
