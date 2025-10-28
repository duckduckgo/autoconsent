import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heks.ch_xmw', ['https://www.heks.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
