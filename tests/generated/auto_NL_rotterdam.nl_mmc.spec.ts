import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rotterdam.nl_mmc', ['https://www.rotterdam.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
