import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ost.ch_fzy', ['https://www.ost.ch/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
