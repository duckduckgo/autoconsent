import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hostnet.nl_0ub', ['https://www.hostnet.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
