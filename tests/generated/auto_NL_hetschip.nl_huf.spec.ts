import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetschip.nl_huf', ['https://www.hetschip.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
