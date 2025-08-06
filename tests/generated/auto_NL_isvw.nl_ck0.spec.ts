import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isvw.nl_ck0', ['https://isvw.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
