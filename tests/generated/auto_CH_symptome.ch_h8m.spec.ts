import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_symptome.ch_h8m', ['https://www.symptome.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
