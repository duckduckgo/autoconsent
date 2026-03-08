import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alexshoes.ch_tc9', ['https://alexshoes.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
