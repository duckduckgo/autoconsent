import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_airmiles.nl_f6z', ['https://www.airmiles.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
