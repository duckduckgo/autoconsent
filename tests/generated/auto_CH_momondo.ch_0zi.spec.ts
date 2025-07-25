import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_momondo.ch_0zi', ['https://www.momondo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
