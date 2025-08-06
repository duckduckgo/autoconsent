import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3djake.ch_rs8', ['https://www.3djake.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
