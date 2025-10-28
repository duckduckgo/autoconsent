import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_goodfeeling.nl_t31', ['https://goodfeeling.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
