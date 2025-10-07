import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vve.nl_ppz', ['https://www.vve.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
