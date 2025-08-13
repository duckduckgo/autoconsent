import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_iplo.nl_f2y', ['https://iplo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
