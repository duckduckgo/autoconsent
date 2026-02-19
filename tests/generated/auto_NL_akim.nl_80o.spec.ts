import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_akim.nl_80o', ['https://www.akim.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
