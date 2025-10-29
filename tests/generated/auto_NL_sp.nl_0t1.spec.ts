import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sp.nl_0t1', ['https://www.sp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
