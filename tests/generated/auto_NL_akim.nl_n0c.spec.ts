import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_akim.nl_n0c', ['https://www.akim.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
