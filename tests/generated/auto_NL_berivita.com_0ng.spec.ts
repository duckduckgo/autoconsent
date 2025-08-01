import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_berivita.com_0ng', ['https://www.berivita.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
