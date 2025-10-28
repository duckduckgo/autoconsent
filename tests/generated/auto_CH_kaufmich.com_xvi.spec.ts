import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kaufmich.com_xvi', ['https://www.kaufmich.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
