import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mofakult.ch_i9g', ['https://www.mofakult.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
