import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_thinkrich.nl_evh', ['https://thinkrich.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
