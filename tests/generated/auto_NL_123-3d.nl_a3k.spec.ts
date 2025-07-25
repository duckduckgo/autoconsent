import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_123-3d.nl_a3k', ['https://www.123-3d.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
