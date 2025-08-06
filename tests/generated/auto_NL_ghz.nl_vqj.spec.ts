import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ghz.nl_vqj', ['https://www.ghz.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
