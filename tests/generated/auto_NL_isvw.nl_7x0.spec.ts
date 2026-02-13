import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_isvw.nl_7x0', ['https://isvw.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
