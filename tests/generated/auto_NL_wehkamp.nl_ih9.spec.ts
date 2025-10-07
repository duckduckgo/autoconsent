import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wehkamp.nl_ih9', ['https://www.wehkamp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
