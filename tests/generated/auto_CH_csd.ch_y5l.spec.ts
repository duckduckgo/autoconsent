import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_csd.ch_y5l', ['https://www.csd.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
