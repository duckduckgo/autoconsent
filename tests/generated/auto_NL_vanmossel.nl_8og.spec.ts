import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanmossel.nl_8og', ['https://www.vanmossel.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
