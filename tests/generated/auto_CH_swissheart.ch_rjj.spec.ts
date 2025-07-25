import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissheart.ch_rjj', ['https://swissheart.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
