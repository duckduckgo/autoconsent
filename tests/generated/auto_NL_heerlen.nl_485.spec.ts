import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_heerlen.nl_485', ['https://www.heerlen.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
