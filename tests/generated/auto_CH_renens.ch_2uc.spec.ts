import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_renens.ch_2uc', ['https://www.renens.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
