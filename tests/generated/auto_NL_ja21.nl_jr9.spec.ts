import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ja21.nl_jr9', ['https://ja21.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
