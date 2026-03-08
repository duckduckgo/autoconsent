import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brijder.nl_0vu', ['https://brijder.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
