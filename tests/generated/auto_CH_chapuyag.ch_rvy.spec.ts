import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chapuyag.ch_rvy', ['https://chapuyag.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
