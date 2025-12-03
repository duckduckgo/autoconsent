import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_topbloemen.nl_xmo', ['https://topbloemen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
