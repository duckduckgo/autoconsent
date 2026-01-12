import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unicef.nl_4ks', ['https://www.unicef.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
