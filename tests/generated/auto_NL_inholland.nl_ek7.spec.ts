import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_inholland.nl_ek7', ['https://www.inholland.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
