import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanmossel.nl_k99', ['https://www.vanmossel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
