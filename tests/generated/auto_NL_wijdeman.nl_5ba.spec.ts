import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wijdeman.nl_5ba', ['https://www.wijdeman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
