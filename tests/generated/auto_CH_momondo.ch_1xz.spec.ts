import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_momondo.ch_1xz', ['https://www.momondo.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
