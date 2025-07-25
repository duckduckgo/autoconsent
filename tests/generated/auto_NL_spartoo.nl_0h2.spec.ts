import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spartoo.nl_0h2', ['https://www.spartoo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
