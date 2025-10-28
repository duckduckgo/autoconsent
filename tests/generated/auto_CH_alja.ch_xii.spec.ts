import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alja.ch_xii', ['https://alja.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
