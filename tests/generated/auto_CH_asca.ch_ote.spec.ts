import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asca.ch_ote', ['https://asca.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
