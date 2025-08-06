import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_iplo.nl_4w2', ['https://iplo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
