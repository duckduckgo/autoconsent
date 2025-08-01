import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mofakult.ch_ysq', ['https://www.mofakult.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
