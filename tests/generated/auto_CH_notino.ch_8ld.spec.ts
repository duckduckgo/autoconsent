import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_notino.ch_8ld', ['https://www.notino.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
