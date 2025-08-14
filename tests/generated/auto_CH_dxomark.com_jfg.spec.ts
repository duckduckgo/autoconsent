import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dxomark.com_jfg', ['https://www.dxomark.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
