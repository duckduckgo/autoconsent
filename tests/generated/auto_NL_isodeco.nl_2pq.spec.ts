import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isodeco.nl_2pq', ['https://isodeco.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
