import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cyrisk.com_4jp', ['https://cyrisk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
