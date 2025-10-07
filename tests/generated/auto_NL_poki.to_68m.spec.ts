import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_poki.to_68m', ['https://poki.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
