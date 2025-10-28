import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hfh.ch_sqs', ['https://www.hfh.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
