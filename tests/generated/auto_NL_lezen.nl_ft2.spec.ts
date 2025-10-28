import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lezen.nl_ft2', ['https://www.lezen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
