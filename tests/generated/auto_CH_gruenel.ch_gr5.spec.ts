import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gruenel.ch_gr5', ['https://www.gruenel.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
