import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_exit.ch_qhx', ['https://www.exit.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
