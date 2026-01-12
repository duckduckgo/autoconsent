import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanverre.nl_n42', ['https://www.vanverre.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
