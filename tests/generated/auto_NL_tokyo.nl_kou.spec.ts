import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tokyo.nl_kou', ['https://tokyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
