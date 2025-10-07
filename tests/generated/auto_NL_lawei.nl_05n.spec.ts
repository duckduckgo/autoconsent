import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lawei.nl_05n', ['https://www.lawei.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
