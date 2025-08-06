import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_manus.im_lzp', ['https://manus.im/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
