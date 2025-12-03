import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ghz.nl_cr8', ['https://www.ghz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
