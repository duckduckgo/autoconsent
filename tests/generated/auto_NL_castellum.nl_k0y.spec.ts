import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_castellum.nl_k0y', ['https://castellum.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
