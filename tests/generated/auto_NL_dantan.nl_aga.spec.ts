import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dantan.nl_aga', ['https://dantan.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
