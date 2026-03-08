import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_aan-z.eu_mkp', ['https://aan-z.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
