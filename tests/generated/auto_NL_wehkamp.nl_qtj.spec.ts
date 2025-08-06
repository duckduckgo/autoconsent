import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wehkamp.nl_qtj', ['https://www.wehkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
