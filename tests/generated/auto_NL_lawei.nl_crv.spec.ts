import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lawei.nl_crv', ['https://www.lawei.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
