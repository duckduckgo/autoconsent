import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_roviva.ch_hhk', ['https://www.roviva.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
