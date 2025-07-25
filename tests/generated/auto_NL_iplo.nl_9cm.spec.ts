import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_iplo.nl_9cm', ['https://iplo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
