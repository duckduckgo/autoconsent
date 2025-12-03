import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_politie.nl_8bl', ['https://www.politie.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
