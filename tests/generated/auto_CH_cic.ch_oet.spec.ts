import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cic.ch_oet', ['https://www.cic.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
