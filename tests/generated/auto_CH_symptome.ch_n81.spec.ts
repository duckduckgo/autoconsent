import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_symptome.ch_n81', ['https://www.symptome.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
