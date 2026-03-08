import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_almere.sp.nl_l4x', ['https://almere.sp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
