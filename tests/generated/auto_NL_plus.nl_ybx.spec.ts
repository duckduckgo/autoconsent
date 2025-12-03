import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_plus.nl_ybx', ['https://www.plus.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
