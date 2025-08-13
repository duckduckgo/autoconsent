import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3djake.ch_6k2', ['https://www.3djake.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
