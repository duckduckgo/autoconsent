import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_i-ch.ch_rir', ['https://i-ch.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
