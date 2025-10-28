import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schmuck.ch_wcd', ['https://www.schmuck.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
