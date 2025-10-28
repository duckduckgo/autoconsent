import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_obi.ch_tqd', ['https://www.obi.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
