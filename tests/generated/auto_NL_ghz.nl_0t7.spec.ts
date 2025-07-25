import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ghz.nl_0t7', ['https://www.ghz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
