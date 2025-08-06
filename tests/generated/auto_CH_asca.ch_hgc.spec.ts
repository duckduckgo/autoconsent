import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asca.ch_hgc', ['https://asca.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
