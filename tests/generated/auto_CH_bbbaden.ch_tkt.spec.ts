import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bbbaden.ch_tkt', ['https://www.bbbaden.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
