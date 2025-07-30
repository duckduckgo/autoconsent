import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nordpass.com_bq0', ['https://nordpass.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
