import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tvgids.nl_9u8', ['https://www.tvgids.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
