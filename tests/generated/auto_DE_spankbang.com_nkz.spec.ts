import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_spankbang.com_nkz', ['https://spankbang.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
