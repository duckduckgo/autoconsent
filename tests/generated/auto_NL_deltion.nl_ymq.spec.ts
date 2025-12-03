import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deltion.nl_ymq', ['https://www.deltion.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
