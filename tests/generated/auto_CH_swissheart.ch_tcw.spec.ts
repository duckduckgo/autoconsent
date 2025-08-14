import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissheart.ch_tcw', ['https://swissheart.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
