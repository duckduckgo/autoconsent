import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_akim.nl_lw8', ['https://www.akim.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
