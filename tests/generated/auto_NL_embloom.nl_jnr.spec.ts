import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_embloom.nl_jnr', ['https://www.embloom.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
