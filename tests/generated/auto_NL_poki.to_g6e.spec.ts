import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_poki.to_g6e', ['https://poki.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
