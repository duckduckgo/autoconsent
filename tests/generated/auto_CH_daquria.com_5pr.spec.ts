import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_daquria.com_5pr', ['https://daquria.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
