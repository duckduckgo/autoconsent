import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spartoo.nl_2g3', ['https://www.spartoo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
