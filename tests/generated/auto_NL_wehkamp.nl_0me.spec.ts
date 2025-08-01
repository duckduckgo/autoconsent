import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wehkamp.nl_0me', ['https://www.wehkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
