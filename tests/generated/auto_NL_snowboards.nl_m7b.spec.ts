import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_snowboards.nl_m7b', ['https://snowboards.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
