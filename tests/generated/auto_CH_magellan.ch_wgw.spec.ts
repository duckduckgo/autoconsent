import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_magellan.ch_wgw', ['https://www.magellan.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
