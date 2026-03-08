import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_career.hm.com_65k', ['https://career.hm.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
