import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deloox.nl_qzv', ['https://www.deloox.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
