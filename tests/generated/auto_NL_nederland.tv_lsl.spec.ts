import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nederland.tv_lsl', ['https://www.nederland.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
