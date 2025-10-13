import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetschip.nl_39e', ['https://www.hetschip.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
