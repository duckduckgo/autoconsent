import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_bk.nl_tx4', ['https://bk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
