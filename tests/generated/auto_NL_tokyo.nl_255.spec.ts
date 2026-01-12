import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tokyo.nl_255', ['https://tokyo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
