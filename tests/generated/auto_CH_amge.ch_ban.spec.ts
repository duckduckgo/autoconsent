import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_amge.ch_ban', ['https://amge.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
