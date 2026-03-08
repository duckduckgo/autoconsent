import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biskoui.ch_vpo', ['https://biskoui.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
