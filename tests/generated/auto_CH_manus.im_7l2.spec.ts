import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_manus.im_7l2', ['https://manus.im/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
