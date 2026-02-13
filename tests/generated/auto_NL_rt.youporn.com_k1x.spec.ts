import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rt.youporn.com_k1x', ['https://rt.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
