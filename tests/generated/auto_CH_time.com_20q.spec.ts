import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_time.com_20q', ['https://time.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
