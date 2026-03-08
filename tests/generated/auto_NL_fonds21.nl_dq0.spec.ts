import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_fonds21.nl_dq0', ['https://fonds21.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
