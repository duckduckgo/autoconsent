import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanmossel.nl_pft', ['https://www.vanmossel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
