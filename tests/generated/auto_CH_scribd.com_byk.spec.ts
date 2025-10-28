import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_scribd.com_byk', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
