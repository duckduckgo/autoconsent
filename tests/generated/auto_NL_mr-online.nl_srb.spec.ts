import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mr-online.nl_srb', ['https://www.mr-online.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
