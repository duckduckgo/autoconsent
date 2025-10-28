import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_transip.nl_397', ['https://www.transip.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
