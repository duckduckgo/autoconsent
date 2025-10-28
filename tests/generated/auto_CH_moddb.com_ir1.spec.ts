import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_moddb.com_ir1', ['https://www.moddb.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
