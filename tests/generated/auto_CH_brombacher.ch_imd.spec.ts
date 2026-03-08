import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_brombacher.ch_imd', ['https://brombacher.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
