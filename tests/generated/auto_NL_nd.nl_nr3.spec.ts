import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nd.nl_nr3', ['https://www.nd.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
