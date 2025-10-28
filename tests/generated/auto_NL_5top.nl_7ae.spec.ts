import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_5top.nl_7ae', ['https://5top.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
