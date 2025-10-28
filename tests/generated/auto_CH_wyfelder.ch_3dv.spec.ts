import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wyfelder.ch_3dv', ['https://wyfelder.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
