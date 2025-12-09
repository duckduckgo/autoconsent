import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_unicef.nl_3e0', ['https://www.unicef.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
