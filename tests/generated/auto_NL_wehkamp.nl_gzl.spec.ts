import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wehkamp.nl_gzl', ['https://www.wehkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
