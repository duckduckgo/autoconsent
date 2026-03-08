import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_copperant.com_lsk', ['https://copperant.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
