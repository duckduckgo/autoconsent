import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bitget.com_fov', ['https://www.bitget.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
