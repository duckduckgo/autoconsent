import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_selectra.nl_708', ['https://selectra.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
