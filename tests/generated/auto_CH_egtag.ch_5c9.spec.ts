import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_egtag.ch_5c9', ['https://egtag.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
