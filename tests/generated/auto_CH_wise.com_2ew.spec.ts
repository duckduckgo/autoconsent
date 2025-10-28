import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wise.com_2ew', ['https://wise.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
