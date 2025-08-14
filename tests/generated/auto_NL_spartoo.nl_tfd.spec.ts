import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_spartoo.nl_tfd', ['https://www.spartoo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
