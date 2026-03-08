import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dsg.ch_85u', ['https://dsg.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
