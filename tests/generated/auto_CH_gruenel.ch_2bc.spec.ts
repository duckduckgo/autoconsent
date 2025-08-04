import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gruenel.ch_2bc', ['https://www.gruenel.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
