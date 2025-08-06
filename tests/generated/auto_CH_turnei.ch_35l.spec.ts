import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_turnei.ch_35l', ['https://www.turnei.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
