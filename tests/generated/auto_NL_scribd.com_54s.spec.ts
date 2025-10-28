import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_scribd.com_54s', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
