import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airmiles.nl_qoc', ['https://www.airmiles.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
