import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flower24.ch_08h', ['https://flower24.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
