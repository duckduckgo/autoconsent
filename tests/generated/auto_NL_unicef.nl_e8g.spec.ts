import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unicef.nl_e8g', ['https://www.unicef.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
