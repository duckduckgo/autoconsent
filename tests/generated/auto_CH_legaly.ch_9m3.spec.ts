import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_legaly.ch_9m3', ['https://www.legaly.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
