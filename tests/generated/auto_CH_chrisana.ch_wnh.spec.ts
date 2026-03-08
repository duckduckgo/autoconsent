import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chrisana.ch_wnh', ['https://chrisana.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
