import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dezendo.nl_g1m', ['https://dezendo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
