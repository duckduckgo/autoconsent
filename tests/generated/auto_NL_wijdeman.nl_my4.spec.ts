import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wijdeman.nl_my4', ['https://www.wijdeman.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
