import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sp.nl_en2', ['https://www.sp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
