import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_jellinek.nl_5bl', ['https://www.jellinek.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
