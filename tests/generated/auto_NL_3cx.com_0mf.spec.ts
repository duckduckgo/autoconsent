import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_3cx.com_0mf', ['https://www.3cx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
