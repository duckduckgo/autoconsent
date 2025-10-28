import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_knmp.nl_b8g', ['https://www.knmp.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
