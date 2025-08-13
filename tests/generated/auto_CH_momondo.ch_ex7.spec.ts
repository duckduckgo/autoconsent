import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_momondo.ch_ex7', ['https://www.momondo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
