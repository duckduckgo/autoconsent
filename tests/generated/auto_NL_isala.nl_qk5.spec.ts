import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isala.nl_qk5', ['https://www.isala.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
