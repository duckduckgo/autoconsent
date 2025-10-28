import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_usm-markt.ch_n6p', ['https://usm-markt.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
