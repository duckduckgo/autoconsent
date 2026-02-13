import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_3dstore.ch_8om', ['https://3dstore.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
