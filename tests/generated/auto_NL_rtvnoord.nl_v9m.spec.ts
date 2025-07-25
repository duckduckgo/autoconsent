import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rtvnoord.nl_v9m', ['https://www.rtvnoord.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
