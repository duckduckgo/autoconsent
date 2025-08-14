import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vinos.ch_n0c', ['https://www.vinos.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
