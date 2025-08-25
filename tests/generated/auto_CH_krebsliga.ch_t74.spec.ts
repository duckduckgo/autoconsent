import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_krebsliga.ch_t74', ['https://www.krebsliga.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
