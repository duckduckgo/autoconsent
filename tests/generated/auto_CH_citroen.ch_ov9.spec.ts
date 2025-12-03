import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_citroen.ch_ov9', ['https://www.citroen.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
