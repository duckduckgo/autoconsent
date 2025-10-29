import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_legaly.ch_7r4', ['https://www.legaly.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
