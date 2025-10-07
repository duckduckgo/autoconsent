import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deltion.nl_e5j', ['https://www.deltion.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
