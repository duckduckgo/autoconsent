import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brys.nl_5pw', ['https://www.brys.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
