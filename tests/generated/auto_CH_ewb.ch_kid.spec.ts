import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ewb.ch_kid', ['https://www.ewb.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
