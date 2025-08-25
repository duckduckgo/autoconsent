import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_moebel24.ch_fck', ['https://www.moebel24.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
