import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3djake.ch_szt', ['https://www.3djake.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
