import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nature.com_wgx', ['https://www.nature.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
