import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spankbang.com_syz', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
