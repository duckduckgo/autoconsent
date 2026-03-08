import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_calcasa.nl_mtf', ['https://calcasa.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
