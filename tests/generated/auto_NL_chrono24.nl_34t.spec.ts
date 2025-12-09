import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_chrono24.nl_34t', ['https://www.chrono24.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
