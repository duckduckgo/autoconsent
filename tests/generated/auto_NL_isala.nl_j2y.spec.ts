import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isala.nl_j2y', ['https://www.isala.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
