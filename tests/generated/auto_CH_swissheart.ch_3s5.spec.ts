import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissheart.ch_3s5', ['https://swissheart.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
