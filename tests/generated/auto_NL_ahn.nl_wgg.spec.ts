import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ahn.nl_wgg', ['https://www.ahn.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
