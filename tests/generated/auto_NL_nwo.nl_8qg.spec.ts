import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nwo.nl_8qg', ['https://www.nwo.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
