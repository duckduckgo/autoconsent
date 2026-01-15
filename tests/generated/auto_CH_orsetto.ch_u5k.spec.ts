import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_orsetto.ch_u5k', ['https://orsetto.ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
