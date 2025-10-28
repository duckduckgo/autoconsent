import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_alja.ch_csl', ['https://alja.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
