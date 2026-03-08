import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_festineuch.ch_fs2', ['https://festineuch.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
