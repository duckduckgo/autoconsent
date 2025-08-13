import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_heerlen.nl_eyy', ['https://www.heerlen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
