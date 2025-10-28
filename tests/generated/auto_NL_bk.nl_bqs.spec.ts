import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bk.nl_bqs', ['https://bk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
