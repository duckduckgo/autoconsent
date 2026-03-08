import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_astoriahome.ch_a33', ['https://astoriahome.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
