import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rega.ch_nwh', ['https://www.rega.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
