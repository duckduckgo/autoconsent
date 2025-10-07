import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_poki.to_xms', ['https://poki.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
