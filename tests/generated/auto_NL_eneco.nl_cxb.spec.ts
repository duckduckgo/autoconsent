import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_eneco.nl_cxb', ['https://www.eneco.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
