import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lcsc.com_0d4', ['https://lcsc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
