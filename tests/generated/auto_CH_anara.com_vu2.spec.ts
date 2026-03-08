import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anara.com_vu2', ['https://anara.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
