import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spankbang.com_dao', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
