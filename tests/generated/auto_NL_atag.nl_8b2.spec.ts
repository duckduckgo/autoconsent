import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_atag.nl_8b2', ['https://www.atag.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
