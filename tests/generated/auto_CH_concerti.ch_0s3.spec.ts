import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_concerti.ch_0s3', ['https://www.concerti.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
