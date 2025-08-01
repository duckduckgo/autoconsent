import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airmiles.nl_y22', ['https://www.airmiles.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
