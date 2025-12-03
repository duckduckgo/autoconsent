import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wehkamp.nl_7li', ['https://www.wehkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
